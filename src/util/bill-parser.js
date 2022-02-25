// @flow
import moment from 'moment';
import {Amount, R1BillContent, R1TrustedSupplier} from './bill-datatypes';

export class QrParserResult{
    parsed/*: boolean*/;
    rawContent/*:string */;
    parsedContent/*: R1BillContent*/;
}

export const R1TaxRates = {
    Rate20: 20,
    Rate19: 19,
    Rate13: 13,
    Rate10: 10,
    Rate0: 0
}

export function parse(qrContent /*: string */) /*: QrParserResult*/{
    let result = new QrParserResult();
    result.parsed = false;
    result.rawContent = qrContent;
    
    if (checkAlgoR1(qrContent)){
        let parseResult = parseAlgoR1(qrContent);
        if (parseResult) {
            result.parsed = true;
            result.parsedContent = parseResult;
        }
    }

    return result;
}


function parseAlgoR1(content){
    // https://de.wikipedia.org/wiki/Registrierkassensicherheitsverordnung
    // moment.js uses kk instead of hh for 24 hour formatting
    const r1DateFormat = 'YYYY-MM-DDTkk:mm:ss';

    let fields = splitR1String(content);

    let r1Result = new R1BillContent();

    r1Result.algorithm = "R1";
    r1Result.supplierR1 = new R1TrustedSupplier(fields[0].substring(3));
    r1Result.registerNumberR1 = fields[1];
    r1Result.billNumber = fields[2];
    r1Result.date = moment(fields[3], r1DateFormat, true);
    r1Result.amounts = getR1amounts(fields);
    r1Result.encryptedRevenueCounterR1 = fields[9];
    r1Result.certSerialR1 = fields[10];
    r1Result.billSignatureR1 = fields[11];
    r1Result.previousBillSignatureR1 = fields[12];

    return r1Result;
}

function checkAlgoR1(content /*: string*/) {
    let fields = splitR1String(content);

    if (fields.length !== 13){
        return false;
    }

    // Exact match, ignoring case
    let regExp = new RegExp("^R1-AT\\d$","i");
    return regExp.test(fields[0]);
}

function getR1amounts(fields){

    let amounts = [];
    let amount20p = stringToFloat(fields[4]);
    let amount10p = stringToFloat(fields[5]);
    let amount13p = stringToFloat(fields[6]);
    let amount0p = stringToFloat(fields[7]);
    let amount19p = stringToFloat(fields[8]);

    if (amount20p) {
        amounts.push(new Amount(amount20p, R1TaxRates.Rate20, "EUR"));
    }
    if (amount10p) {
        amounts.push(new Amount(amount10p, R1TaxRates.Rate10, "EUR"));
    }
    if (amount13p) {
        amounts.push(new Amount(amount13p, R1TaxRates.Rate13, "EUR"));
    }
    if (amount0p) {
        amounts.push(new Amount(amount0p, R1TaxRates.Rate0, "EUR"));
    }
    if (amount19p) {
        amounts.push(new Amount(amount19p, R1TaxRates.Rate19, "EUR"));
    }
    return amounts;
}

function splitR1String(r1String) {
    if (r1String.startsWith("_")){
        r1String = r1String.substring(1);
    }
    
    return r1String.split("_");
}

function stringToFloat(stringValue) {
    return +(stringValue.replace(",","."));
}
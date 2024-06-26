import Dexie from 'dexie';
import { Amount, R1BillContent, R1TrustedSupplier } from './bill-datatypes';
import { matchCompanyByCertSerial } from './company-matcher';

const db = new Dexie('qrDatabase');

db.version(13).stores({
    r1Bills: '++id,algorithm,amounts,&billNumber,dateMs,registerNumberR1,encryptedRevenueCounterR1,certSerialR1,billSignatureR1,previousBillSignatureR1,cancellation,supplierR1'
});

db.r1Bills.mapToClass(R1BillContent);

export async function saveR1Bill(r1Bill){
    let thisBill = await db.r1Bills
        .where('billNumber')
        .equals(r1Bill.billNumber)
        .first();
    if (thisBill) {
        return thisBill.id;
    }

    let r1BillMapped = mapR1BillForDb(r1Bill);

    return db.r1Bills.add(r1BillMapped).then( billId => {
        if (!r1BillMapped.companyName) {
            r1BillMapped.id = billId;
            matchCompanyByCertSerial(r1BillMapped.certSerialR1)
            .then(companyName => {
                if (companyName !== null) {
                    r1BillMapped.companyName = companyName;
                    db.r1Bills.put(r1BillMapped);
                }
            });
        }
        return billId;
    });
}

export async function readR1Bills(){
    return await db.r1Bills.reverse().toArray()
        .then(result => {
            result.forEach( bill => {
                bill.amounts = bulkConvertDbAmountToAmountInstance(bill.amounts);
                bill.supplierR1 = new R1TrustedSupplier(bill.supplierR1.short);
            });
            return result;
        });
}

export async function deleteR1Bill(billId) {
    return await db.r1Bills.where('id').equals(billId).delete();
}

export async function deleteAllR1Bills() {
    return await db.r1Bills.clear();
}

function mapR1BillForDb(r1Bill){
    r1Bill.amounts = r1Bill.amounts?.map(convertAmountInstanceToDbAmount);
    return r1Bill;
}

function convertAmountInstanceToDbAmount (amountObject) {
    let dbAmount = {};
    dbAmount.fullAmount = amountObject.fullAmount;
    dbAmount.taxPercentage = amountObject.taxPercentage;
    dbAmount.currency = amountObject.currency;
    return dbAmount;
}

function bulkConvertDbAmountToAmountInstance(dbAmounts) {
    return dbAmounts.map(dbAmount => convertDbAmountToAmountInstance(dbAmount));
}

function convertDbAmountToAmountInstance(dbAmount) {
    let amount = new Amount();
    amount.fullAmount = dbAmount.fullAmount;
    amount.taxPercentage = dbAmount.taxPercentage;
    amount.currency = dbAmount.currency;
    return amount;
}
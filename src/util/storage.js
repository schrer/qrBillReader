import Dexie from 'dexie';
import { Amount, R1BillContent } from './bill-datatypes';

const db = new Dexie('qrDatabase');

db.version(11).stores({
    r1Bills: '++id,algorithm,amounts,&billNumber,dateMs,registerNumberR1,encryptedRevenueCounterR1,certSerialR1,billSignatureR1,previousBillSignatureR1'
});

db.r1Bills.mapToClass(R1BillContent);

export async function saveR1Bill(r1Bill){
    let r1BillMapped = mapR1BillForDb(r1Bill);
    return await db.r1Bills.add(r1BillMapped);
}

export async function readR1Bills(){
    return await db.r1Bills.reverse().toArray()
        .then(result => {
            result.forEach( bill => {
                bill.amounts = bulkConvertDbAmountToAmountInstance(bill.amounts);
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
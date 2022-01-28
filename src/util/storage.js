import Dexie from 'dexie';

export const db = new Dexie('qrDatabase');

db.version(8).stores({
    r1Bills: '++id,algorithm,billNumber,dateMs,registerNumberR1,encryptedRevenueCounterR1,certSerialR1,billSignatureR1,previousBillSignatureR1'
});



export class BillContent {
    algorithm;
    amounts;
    billNumber;
    date;
}

export class R1BillContent extends BillContent {
    supplierR1;
    registerNumberR1;
    encryptedRevenueCounterR1;
    certSerialR1;
    billSignatureR1;
    previousBillSignatureR1;

    get isCancellationReceiptR1(){
        return "U1RP".equalsIgnoreCase(this.encryptedRevenueCounter);
    }
}

export class Amount {
    fullAmount;
    taxPercentage;
    currency;

    constructor(fullAmount, taxPercentage, currency){
        this.fullAmount = fullAmount;
        this.taxPercentage = taxPercentage;
        this.currency = currency;
    }

    get netAmount(){
        let taxDivisor = (100 + this.taxPercentage)/100
        return this.fullAmount / taxDivisor;
    }

    get taxAmount(){
        return this.fullAmount - this.netAmount;
    }
}

export class R1TrustedSupplier {
    short;

    constructor(short){
        this.short = short;
    }

    get name(){
        switch(this.short){
            case "AT0":
            case "at0":
                return "Geschlossenes Gesamtsystem - AT0";
            case "AT1":
            case "at1":
                return "A-Trust";
            case "AT2":
            case "at2":
                return "e-commerce monitoring";
            case "AT3":
            case "at3":
                return "PrimeSign";
            default:
                return "Unknown vendor - " + this.short; 
        }
    }
}

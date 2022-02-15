import moment from "moment";

export class BillContent {
    id;
    algorithm;
    amounts;
    billNumber;
    dateMs;

    get date() {
        return moment(this.dateMs);
    }

    set date(value) {
        this.dateMs = value.valueOf()
    }
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

    get grossAmount() {
        if (!this.amounts) {
            return 0;
        }

        const sumReducer = (previous, current) => previous + current;
        return this.amounts
            .map(amount => amount ? amount.fullAmount : 0)
            .reduce(sumReducer).toFixed(2);
    }

    get netAmount() {
        if (!this.amounts) {
            return 0;
        }

        const sumReducer = (previous, current) => previous + current;
        return Number(this.amounts
            .map(amount => amount ? Number(amount.netAmount) : 0)
            .reduce(sumReducer)).toFixed(2);
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
        return (this.fullAmount / taxDivisor).toFixed(2);
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
        switch(this.short.toLowerCase()){
            case "at0":
                return "Geschlossenes Gesamtsystem - AT0";
            case "at1":
                return "A-Trust";
            case "at2":
                return "e-commerce monitoring";
            case "at3":
                return "PrimeSign";
            default:
                return "Unknown vendor - " + this.short; 
        }
    }
}

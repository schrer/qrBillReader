// @flow
import moment from 'moment';

export class BillContent {
    id /*: number*/;
    algorithm /*: string*/;
    amounts /*: Array<Amount>*/;
    billNumber /*: string*/;
    dateMs/*: number*/;
    cancellation/*: boolean*/;
    companyName/*: string*/;

    get date() /*: moment.Moment*/{
        return moment(this.dateMs);
    }

    set date(value) {
        this.dateMs = value.valueOf()
    }
}

export class R1BillContent extends BillContent {
    supplierR1 /*: R1TrustedSupplier */;
    registerNumberR1 /*: string*/;
    encryptedRevenueCounterR1 /*: string*/;
    certSerialR1 /*: string*/;
    billSignatureR1 /*: string*/;
    previousBillSignatureR1 /*: string*/;

    get isCancellationReceiptR1() /*: boolean */ {
        return this.encryptedRevenueCounterR1 != null
            && "U1RP" === this.encryptedRevenueCounterR1.toUpperCase();
    }

    get grossAmount() /*: number */ {
        if (!this.amounts) {
            return 0;
        }

        const sumReducer = (previous, current) => previous + current;
        return this.amounts
            .map(amount => amount ? amount.fullAmount : 0)
            .reduce(sumReducer);
    }

    get netAmount() /*: number */ {
        if (!this.amounts) {
            return 0;
        }

        const sumReducer = (previous, current) => previous + current;
        return Number(this.amounts
            .map(amount => amount ? Number(amount.netAmount) : 0)
            .reduce(sumReducer));
    }
}

export class Amount {
    fullAmount /*: number */;
    taxPercentage /*: number */;
    currency /*: string */;

    constructor(fullAmount /*: number */, taxPercentage /*: number */, currency /*: string */) {
        this.fullAmount = fullAmount;
        this.taxPercentage = taxPercentage;
        this.currency = currency;
    }

    get netAmount() /*: number */ {
        let taxDivisor = (100 + this.taxPercentage) / 100
        return (this.fullAmount / taxDivisor);
    }

    get taxAmount() /*: number */ {
        return this.fullAmount - this.netAmount;
    }
}

export class R1TrustedSupplier {
    short /*: string */;

    constructor(short /*: string */) {
        this.short = short;
    }

    get name() /*: string */ {
        switch (this.short.toLowerCase()) {
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

export class CompanyInfo {
    shopName /*: string */;
    companyName /*: string */;
    certId /*: string */;
    uid /*: string */;

    constructor(company) {
        this.shopName = company.shopName;
        this.companyName = company.companyName;
        this.certId = company.certId;
        this.uid = company.uid;
    }
}

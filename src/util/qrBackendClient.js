import {CompanyInfo} from './bill-datatypes';

class BackendClient {
    constructor(apiUrl /*: string*/) {
        if (!apiUrl.endsWith('/')) {
            apiUrl += '/';
        }
        this.apiURL = apiUrl;
        this.companyEndpoint = this.apiURL + "company/";
    }

    async matchCompanyByQrCertSerial(certSerial /*: string*/) /*: CompanyInfo*/ {
        try {
            const response = await fetch(this.companyEndpoint + certSerial);
            return await response.json().then(data => {return new CompanyInfo(data)});
        } catch (error) {
            console.debug('Unable to get company info:', error);
            return null;
        }
    }
}

export default BackendClient;
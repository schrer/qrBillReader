import {CompanyInfo} from './bill-datatypes';
import config from './config';

class BackendClient {
    constructor(apiUrl /*: string*/, active /*: boolean*/ = true) {
        this.active = active;
        if (!apiUrl.endsWith('/')) {
            apiUrl += '/';
        }
        this.apiURL = apiUrl;
        this.companyEndpoint = this.apiURL + "company/";
    }

    async matchCompanyByQrCertSerial(certSerial /*: string*/) /*: CompanyInfo*/ {
        if (this.active === false) {
            return null;
        }
        try {
            const response = await fetch(this.companyEndpoint + certSerial);
            return await response.json().then(data => {return new CompanyInfo(data)});
        } catch (error) {
            console.debug('Unable to get company info:', error);
            return null;
        }
    }

    isActive() {
        return this.active;
    }
}

class NoOpClient {
    async matchCompanyByQrCertSerial(certSerial /*: string*/) /*: CompanyInfo*/ {
        return null;
    }

    isActive() {
        return false;
    }
}

function isBackendAlive() {
    // TODO implement call to alive endpoint
    return true;
}

function getBackendClient() {
    if (config.api.active && isBackendAlive()) {
        return new BackendClient(config.api.url);
    } else {
        console.debug('Backend not available. Using no-op client.');
        return new NoOpClient();
    }
}

const ApiClient = getBackendClient();

export default ApiClient;
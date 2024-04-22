import BackendClient from './qrBackendClient';

const apiURL = "http://localhost:8080/api/";
const apiClient = new BackendClient(apiURL);

export async function matchCompanyByCertSerial(certSerial /*: string*/){
    return apiClient.matchCompanyByQrCertSerial(certSerial).then(data => {return data.companyName});
}
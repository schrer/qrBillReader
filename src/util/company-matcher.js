import ApiClient from './qrBackendClient';


export async function matchCompanyByCertSerial(certSerial /*: string*/){
    return ApiClient.matchCompanyByQrCertSerial(certSerial).then(data => {return data.companyName});
}
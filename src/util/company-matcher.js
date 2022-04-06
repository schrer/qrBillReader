import companyMappings from './data/companyMapping.json';

const uidMapping = companyMappings.uidMap;
const serialMapping = companyMappings.serialMap

export function matchCompanyByCertSerial(certSerial /*: string*/){
    
    const uidRegExp = new RegExp("^U:ATU\\d{8}-\\d+$","i");

    if (uidRegExp.test(certSerial)) {
        const uid = certSerial.slice(2,13);
        return uidMapping[uid];
    }

    return serialMapping[certSerial];
}
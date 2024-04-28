import QrReader from 'react-qr-reader';
import {parse} from '../../util/bill-parser'; 
import { saveR1Bill } from '../../util/storage';


export default function QrReaderComponent() {

  let handleScan = data => {
    if (data) {
      console.log(`Read new qr code: \n ${data}`);
      let parsedObject = parse(data);
      if (parsedObject.parsed) {
        addQrBill(parsedObject.parsedContent);
      }
    }
  }

  let handleError = err => {
    console.error(`Failed to scan qr code: ${err}`);
  }

  async function addQrBill (qrBill) {
    try {
      qrBill.date = qrBill.date.valueOf()
      await saveR1Bill(qrBill);
    } catch (error) {
      console.error(`Failed to add ${qrBill.billNumber} : ${error}`);
    }
  }

  return <div>
      <QrReader
        delay={800}
        onError={handleError}
        onScan={handleScan}
      />
    </div>

}

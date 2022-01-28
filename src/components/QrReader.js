import QrReader from 'react-qr-reader';
import {parse} from '../util/bill-parser'; 
import { db } from '../util/storage';


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
      const id = await db.r1Bills.add(qrBill);

      console.log(`Added bill ${qrBill.billNumber} with id ${id}`);
    } catch (error) {
      console.error(`Failed to add ${qrBill.billNumber} : ${error}`);
    }
  }

  return <>
    <div>
      <QrReader
        delay={200}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  </>

}

/*

export default class QrReaderComponent extends Component {

  handleScan = data => {
    if (data) {
      let parsedObject = parse(data);
      if (parsedObject.parsed) {
        addQrBill(parsedObject.parsedContent);
      }
    }
  }

  handleError = err => {
    console.error(err);
  }

  get billNumber(){
    let parsed = parse(this.state.result);
    if (parsed.parsed) {
      return parsed.parsedContent.billNumber;
    }
    return parsed.rawContent;
  }



  render() {
    return (
      <div>
        <QrReader
          delay={200}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.billNumber}</p>
      </div>
    )
  }
}

*/
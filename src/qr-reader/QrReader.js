import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import {parse} from '../util/bill-parser' 

export default class QrReaderComponent extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  get billNumber(){
    let parsed = parse(this.state.result);
    if (parsed.parsed) {
      return parsed.parsedContent.billNumber
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
          style={{ width: '200%' }}
        />
        <p>{this.billNumber}</p>
      </div>
    )
  }
}

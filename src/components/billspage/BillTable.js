import React from 'react';
import { CContainer, CRow, CTable, CTableBody } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import { R1TaxRates } from '../../util/bill-parser';
import BillTableRow from './BillTableRow';


const BillTable = (props) => {

    const translate = useTranslation().t;
    let bill = props.bill;
    let amounts = props.bill.amounts;

    let gross20p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate20)?.fullAmount;
    let gross19p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate19)?.fullAmount;
    let gross13p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate13)?.fullAmount;
    let gross10p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate10)?.fullAmount;
    let gross0p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate0)?.fullAmount;

    return (        
        <CContainer>
            <CRow>
                <CTable hover>
                    <CTableBody>
                        <BillTableRow title={translate('bill.table.billNumber')} content={bill.billNumber}/>
                        <BillTableRow title={translate('bill.table.date')} content={bill.date.format('DD.MM.YYYY, kk:mm:ss')}/>
                        <BillTableRow title={translate('bill.table.netamount.full')} content={Number(bill.netAmount).toFixed(2)}/>
                        <BillTableRow title={translate('bill.table.grossamount.full')} content={Number(bill.grossAmount).toFixed(2)}/>
                        {gross20p > 0 &&
                            <BillTableRow title={translate('bill.table.grossamount.20percent')} content={gross20p.toFixed(2)}/>
                        }
                        {gross10p > 0 &&
                            <BillTableRow title={translate('bill.table.grossamount.10percent')} content={gross10p.toFixed(2)}/>
                        }
                        {gross19p > 0 &&
                            <BillTableRow title={translate('bill.table.grossamount.19percent')} content={gross19p.toFixed(2)}/>
                        }
                        {gross13p > 0 &&
                            <BillTableRow title={translate('bill.table.grossamount.13percent')} content={gross13p.toFixed(2)}/>
                        }
                        {gross0p > 0 &&
                            <BillTableRow title={translate('bill.table.grossamount.0percent')} content={gross0p.toFixed(2)}/>
                        }
                    </CTableBody>
                </CTable>
            </CRow>
        </CContainer>

    )
}

export default React.memo(BillTable)
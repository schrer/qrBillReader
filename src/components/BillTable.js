import React from 'react';
import { CContainer, CRow, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow, CButton } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import { R1TaxRates } from '../util/bill-parser';
import { deleteR1Bill } from '../util/storage';

async function deleteQrBill (event, qrBill) {

    await deleteR1Bill(qrBill.id)
        .then(deletecount => console.log(`Deleted bill ${qrBill.billNumber}`))
        .catch(error => console.error(`Failed to delete ${qrBill.billNumber} : ${error}`));
}


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
                <CTable>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">{translate('bill.table.billNumber')}</CTableHeaderCell>
                            <CTableDataCell>{bill.billNumber}</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">{translate('bill.table.date')}</CTableHeaderCell>
                            <CTableDataCell>{bill.date.format('DD.MM.YYYY, kk:mm:ss')}</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">{translate('bill.table.grossamount.full')}</CTableHeaderCell>
                            <CTableDataCell>{bill.grossAmount ? bill.grossAmount : 0}</CTableDataCell>
                        </CTableRow>
                        {gross20p > 0 &&
                            <CTableRow>
                                <CTableHeaderCell scope="row">{translate('bill.table.grossamount.20percent')}</CTableHeaderCell>
                                <CTableDataCell>{gross20p}</CTableDataCell>
                            </CTableRow>
                        }
                        {gross10p > 0 &&
                            <CTableRow>
                                <CTableHeaderCell scope="row">{translate('bill.table.grossamount.10percent')}</CTableHeaderCell>
                                <CTableDataCell>{gross10p}</CTableDataCell>
                            </CTableRow>
                        }
                        {gross19p > 0 &&
                            <CTableRow>
                                <CTableHeaderCell scope="row">{translate('bill.table.grossamount.19percent')}</CTableHeaderCell>
                                <CTableDataCell>{gross19p}</CTableDataCell>
                            </CTableRow>
                        }
                        {gross13p > 0 &&
                            <CTableRow>
                                <CTableHeaderCell scope="row">{translate('bill.table.grossamount.13percent')}</CTableHeaderCell>
                                <CTableDataCell>{gross13p}</CTableDataCell>
                            </CTableRow>
                        }
                        {gross0p > 0 &&
                            <CTableRow>
                                <CTableHeaderCell scope="row">{translate('bill.table.grossamount.0percent')}</CTableHeaderCell>
                                <CTableDataCell>{gross0p}</CTableDataCell>
                            </CTableRow>
                        }
                    </CTableBody>
                </CTable>
            </CRow>
            <CRow>
                <CButton color="danger" variant='outline' onClick={event => deleteQrBill(event, bill)}>Delete</CButton>
            </CRow>
        </CContainer>

    )
}

export default React.memo(BillTable)
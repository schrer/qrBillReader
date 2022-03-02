import React from 'react';
import { CContainer, CRow, CTable, CTableBody } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import { R1TaxRates } from '../../util/bill-parser';
import BillTableRow from './BillTableRow';
import { useUserSettings } from '../../util/userSettingsStorage';


const BillTable = (props) => {

    const translate = useTranslation().t;
    const [userSettings] = useUserSettings();
    const bill = props.bill;
    const amounts = props.bill.amounts;

    const gross20p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate20)?.fullAmount;
    const gross19p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate19)?.fullAmount;
    const gross13p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate13)?.fullAmount;
    const gross10p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate10)?.fullAmount;
    const gross0p = amounts?.find(amount => amount?.taxPercentage === R1TaxRates.Rate0)?.fullAmount;

    const showGross20p = userSettings.showIndividualAmounts && gross20p > 0;
    const showGross10p = userSettings.showIndividualAmounts && gross10p > 0;
    const showGross19p = userSettings.showIndividualAmounts && gross19p > 0;
    const showGross13p = userSettings.showIndividualAmounts && gross13p > 0;
    const showGross0p = userSettings.showIndividualAmounts && gross0p > 0;

    const showNetPrice = userSettings.showNetAmount;
    const showRegisterID = userSettings.showCashRegisterNumber;
    const showTrustedServiceProvider = userSettings.showTrustedServiceProvider;

    return (        
        <CContainer>
            <CRow>
                <CTable hover>
                    <CTableBody>
                        <BillTableRow title={translate('bill.table.billNumber')} content={bill.billNumber}/>
                        <BillTableRow title={translate('bill.table.date')} content={bill.date.format('DD.MM.YYYY, kk:mm:ss')}/>
                        {showNetPrice && 
                            <BillTableRow title={translate('bill.table.netamount.full')} content={Number(bill.netAmount).toFixed(2)}/>
                        }
                        <BillTableRow title={translate('bill.table.grossamount.full')} content={Number(bill.grossAmount).toFixed(2)}/>
                        {showGross20p &&
                            <BillTableRow title={translate('bill.table.grossamount.20percent')} content={gross20p.toFixed(2)}/>
                        }
                        {showGross10p &&
                            <BillTableRow title={translate('bill.table.grossamount.10percent')} content={gross10p.toFixed(2)}/>
                        }
                        {showGross19p &&
                            <BillTableRow title={translate('bill.table.grossamount.19percent')} content={gross19p.toFixed(2)}/>
                        }
                        {showGross13p &&
                            <BillTableRow title={translate('bill.table.grossamount.13percent')} content={gross13p.toFixed(2)}/>
                        }
                        {showGross0p &&
                            <BillTableRow title={translate('bill.table.grossamount.0percent')} content={gross0p.toFixed(2)}/>
                        }
                        {showRegisterID &&
                            <BillTableRow title={translate('bill.table.cashRegisterID')} content={bill.registerNumberR1}/>
                        }
                        {showTrustedServiceProvider &&
                            <BillTableRow title={translate('bill.table.trustedSupplier')} content={bill.supplierR1?.name}/>
                        }

                    </CTableBody>
                </CTable>
            </CRow>
        </CContainer>

    )
}

export default React.memo(BillTable)
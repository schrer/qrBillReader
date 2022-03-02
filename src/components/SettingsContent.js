import React, { Suspense } from 'react';
import { CCard, CCardBody, CCardText, CCardTitle, CContainer, CFormSwitch, CRow, CSpinner } from '@coreui/react';
import { useTranslation } from 'react-i18next';

const SettingsContent = () => {
    const translate = useTranslation().t;

    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <CRow>
                    <CCard>
                        <CCardBody>
                            <CCardTitle>{translate('settings.billinfo.title')}</CCardTitle>
                            <CCardText>
                                <CFormSwitch label={translate('settings.billinfo.showIndividualAmounts')} />
                                <CFormSwitch label={translate('settings.billinfo.showTrustedServiceProvider')} />
                                <CFormSwitch label={translate('settings.billinfo.showCashRegisterNumber')} />
                            </CCardText>
                        </CCardBody>
                    </CCard>
                </CRow>
            </Suspense>
        </CContainer>
    )
}

export default React.memo(SettingsContent)
import React, { Suspense } from 'react';
import { CCard, CCardBody, CCardText, CCardTitle, CContainer, CFormSwitch, CRow, CSpinner } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import { useUserSettings, writeSwitchUserSetting } from '../util/userSettingsStorage'

const SettingsContent = () => {
    const translate = useTranslation().t;
    const [userSettings] = useUserSettings();


    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <CRow>
                    <CCard>
                        <CCardBody>
                            <CCardTitle>{translate('settings.billinfo.title')}</CCardTitle>
                            <CCardText>
                                <CFormSwitch label={translate('settings.billinfo.showIndividualAmounts')} 
                                    defaultChecked={userSettings.showIndividualAmounts} 
                                    onChange={() => writeSwitchUserSetting(userSettings, 'showIndividualAmounts')}/>
                                <CFormSwitch label={translate('settings.billinfo.showTrustedServiceProvider')} 
                                    defaultChecked={userSettings.showTrustedServiceProvider}
                                    onChange={() => writeSwitchUserSetting(userSettings, 'showTrustedServiceProvider')}/>
                                <CFormSwitch label={translate('settings.billinfo.showCashRegisterNumber')} 
                                    defaultChecked={userSettings.showCashRegisterNumber}
                                    onChange={() => writeSwitchUserSetting(userSettings, 'showCashRegisterNumber')}/>
                                <CFormSwitch label={translate('settings.billinfo.showNetAmount')} 
                                    defaultChecked={userSettings.showNetAmount}
                                    onChange={() => writeSwitchUserSetting(userSettings, 'showNetAmount')}/>
                            </CCardText>
                        </CCardBody>
                    </CCard>
                </CRow>
            </Suspense>
        </CContainer>
    )
}


export default React.memo(SettingsContent)
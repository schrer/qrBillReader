import React, { Suspense } from 'react';
import { CCard, CCardBody, CCardText, CCardTitle, CContainer, CListGroup, CRow, CSpinner } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import { useUserSettings, writeSwitchUserSetting } from '../util/userSettingsStorage'
import SettingsSwitch from './settings/SettingsSwitch';

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
                                <CListGroup flush>
                                    <SettingsSwitch id="billInfoShowIndividualAmounts" 
                                        label={translate('settings.billinfo.showIndividualAmounts')} 
                                        defaultChecked={userSettings.showIndividualAmounts} 
                                        onChange={() => writeSwitchUserSetting(userSettings, 'showIndividualAmounts')}/>
                                    <SettingsSwitch id="billInfoShowTrustedServiceProvider" 
                                        label={translate('settings.billinfo.showTrustedServiceProvider')} 
                                        defaultChecked={userSettings.showTrustedServiceProvider} 
                                        onChange={() => writeSwitchUserSetting(userSettings, 'showTrustedServiceProvider')}/>
                                    <SettingsSwitch id="billInfoShowCashRegisterNumber" 
                                        label={translate('settings.billinfo.showCashRegisterNumber')} 
                                        defaultChecked={userSettings.showCashRegisterNumber} 
                                        onChange={() => writeSwitchUserSetting(userSettings, 'showCashRegisterNumber')}/>
                                    <SettingsSwitch id="billInfoShowNetAmount" 
                                        label={translate('settings.billinfo.showNetAmount')} 
                                        defaultChecked={userSettings.showNetAmount} 
                                        onChange={() => writeSwitchUserSetting(userSettings, 'showNetAmount')}/>
                                </CListGroup>
                            </CCardText>
                        </CCardBody>
                    </CCard>
                </CRow>
            </Suspense>
        </CContainer>
    )
}


export default React.memo(SettingsContent)
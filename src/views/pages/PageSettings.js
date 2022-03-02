import React from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsContent, AppFooter, AppHeader } from '../../components';

const PageSettings = () => {
    const translate = useTranslation().t;
    document.title = translate('page.title.settings');

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader showDeleteAll={true}/>
            <div className="body flex-grow-1 px-3">
                <SettingsContent />
            </div>
            <AppFooter />
        </div>
    )
};

export default PageSettings;
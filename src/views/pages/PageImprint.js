import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImprintContent, AppFooter, AppHeader } from '../../components';

const PageImprint = () => {
    const translate = useTranslation().t;
    document.title = translate('page.title.imprint');

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
                <ImprintContent />
            </div>
            <AppFooter />
        </div>
    )
};

export default PageImprint;
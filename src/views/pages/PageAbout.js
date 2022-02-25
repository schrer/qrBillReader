import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutContent, AppFooter, AppHeader } from '../../components';

const PageAbout = () => {
    const translate = useTranslation().t;
    document.title = translate('page.title.about');

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
                <AboutContent />
            </div>
            <AppFooter />
        </div>
    )
};

export default PageAbout;
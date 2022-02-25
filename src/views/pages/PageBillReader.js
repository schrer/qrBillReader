import React from 'react';
import { useTranslation } from 'react-i18next';
import { BillReaderContent, AppFooter, AppHeader } from '../../components';

const PageBillReader = () => {
    const translate = useTranslation().t;
    document.title = translate('page.title.main');

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader showDeleteAll={true}/>
            <div className="body flex-grow-1 px-3">
                <BillReaderContent />
            </div>
            <AppFooter />
        </div>
    )
};

export default PageBillReader;
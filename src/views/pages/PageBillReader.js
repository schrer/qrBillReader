import React from 'react';
import { BillReaderContent, AppFooter, AppHeader } from '../../components';

const PageBillReader = () => {

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
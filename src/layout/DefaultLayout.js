import React from 'react';
import { BillReaderContent, AppFooter, AppHeader } from '../components';

const DefaultLayout = () => {
    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
                <BillReaderContent />
            </div>
            <AppFooter />
        </div>
    )
};

export default DefaultLayout;
import React from 'react';
import { ImprintContent, AppFooter, AppHeader } from '../../components';

const PageImprint = () => {
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
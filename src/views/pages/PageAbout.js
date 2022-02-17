import React from 'react';
import { AboutContent, AppFooter, AppHeader } from '../../components';

const PageAbout = () => {
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
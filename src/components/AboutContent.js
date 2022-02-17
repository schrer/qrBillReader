import React, { Suspense } from 'react';
import { CContainer, CSpinner } from '@coreui/react';
import AboutCard from './about/AboutCard';
import TechnicalAboutCard from './about/TechnicalAboutCard';

const AboutContent = () => {
    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <AboutCard translation="about.whatDoesItDo"/>
                <AboutCard translation="about.whatCanItScan"/>
                <AboutCard translation="about.howTo"/>
                <AboutCard translation="about.storage"/>
                <AboutCard translation="about.privacy"/>
                <TechnicalAboutCard />
            </Suspense>
        </CContainer>
    )
};

export default React.memo(AboutContent);
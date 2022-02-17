import React, { Suspense } from 'react';
import { CCol, CContainer, CRow, CSpinner } from '@coreui/react';
import { useTranslation } from 'react-i18next';

const ImprintContent = () => {
    const translate = useTranslation().t;

    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <CRow>
                    <CCol>
                        <div dangerouslySetInnerHTML={{__html: translate('imprint.full', { 'interpolation': {'escapeValue': false} })}}/>
                    </CCol>
                </CRow>
            </Suspense>
        </CContainer>
    )
};

export default React.memo(ImprintContent);
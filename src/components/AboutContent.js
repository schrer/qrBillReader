import React, { Suspense } from 'react';
import { CContainer, CRow, CSpinner } from '@coreui/react';

const AboutContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <CRow>
          
        </CRow>
      </Suspense>
    </CContainer>
  )
};

export default React.memo(AboutContent);
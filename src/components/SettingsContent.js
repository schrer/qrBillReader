import React, { Suspense } from 'react';
import { CContainer, CSpinner } from '@coreui/react';

const SettingsContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        
      </Suspense>
    </CContainer>
  )
}

export default React.memo(SettingsContent)
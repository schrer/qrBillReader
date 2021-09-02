import React, { Suspense } from 'react';
import { CCol, CContainer, CRow, CSpinner } from '@coreui/react';
import QrReaderComponent from './QrReader';
import BillsAccordion from './BillsAccordion';

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <CRow>
          <CCol xs={12}>
            <QrReaderComponent/>
          </CCol>
          <CCol xs={12}>
            <BillsAccordion/>
          </CCol>
        </CRow>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
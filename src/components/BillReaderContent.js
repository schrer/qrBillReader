import React, { Suspense } from 'react';
import { CCol, CContainer, CRow, CSpinner } from '@coreui/react';
import QrReaderComponent from './billspage/QrReader';
import BillsAccordion from './billspage/BillsAccordion';

const BillReaderContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <CRow>
          <CCol xs={12} xl={6}>
            <QrReaderComponent/>
          </CCol>
          <CCol xs={12} xl={6}>
            <BillsAccordion/>
          </CCol>
        </CRow>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(BillReaderContent)
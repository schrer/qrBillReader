import React from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react';

const BillTable = () => {
  return (
    <CTable>
        <CTableBody>
            <CTableRow>
                <CTableHeaderCell scope="row">Rowheader</CTableHeaderCell>
                <CTableDataCell>Rowcontent</CTableDataCell>
            </CTableRow>
        </CTableBody>
    </CTable>
  )
}

export default React.memo(BillTable)
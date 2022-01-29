import React from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useTranslation } from 'react-i18next';

const BillTable = () => {

  const translate = useTranslation().t;

  return (
    <CTable>
        <CTableBody>
            <CTableRow>
                <CTableHeaderCell scope="row">{translate('bill.tableheader.label')}</CTableHeaderCell>
                <CTableDataCell>{translate('bill.tableheader.value')}</CTableDataCell>
            </CTableRow>
        </CTableBody>
    </CTable>
  )
}

export default React.memo(BillTable)
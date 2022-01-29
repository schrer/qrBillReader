import React from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useTranslation } from 'react-i18next';

const BillTable = () => {

  const {t, i18n} = useTranslation();

  return (
    <CTable>
        <CTableBody>
            <CTableRow>
                <CTableHeaderCell scope="row">{t('bill.tableheader.label')}</CTableHeaderCell>
                <CTableDataCell>{t('bill.tableheader.value')}</CTableDataCell>
            </CTableRow>
        </CTableBody>
    </CTable>
  )
}

export default React.memo(BillTable)
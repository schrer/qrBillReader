import React from 'react';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import BillTable from './BillTable';
import { db } from '../util/storage';
import {useLiveQuery} from 'dexie-react-hooks';


const BillsAccordion = () => {

  const qrBills = useLiveQuery( async () => {
    return await db.r1Bills.toArray();
  })
  return (
    <CAccordion activeItemKey={1}>

      {
        qrBills?.map( bill =>
          <CAccordionItem itemKey={bill.id}>
            <CAccordionHeader>
              {bill.billNumber}
            </CAccordionHeader>
            <CAccordionBody>
              <BillTable/>
            </CAccordionBody>
          </CAccordionItem>
        )
      }
    </CAccordion>
  )
}

export default React.memo(BillsAccordion)
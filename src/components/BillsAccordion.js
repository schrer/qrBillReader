import React from 'react';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import BillTable from './BillTable';

const BillsAccordion = () => {
  return (
    <CAccordion activeItemKey={1}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>
          Accordion Item #1
        </CAccordionHeader>
        <CAccordionBody>
          <BillTable/>
        </CAccordionBody>
      </CAccordionItem>

      <CAccordionItem itemKey={2}>
        <CAccordionHeader>
          Accordion Item #2
        </CAccordionHeader>

        <CAccordionBody>
          <BillTable/>
        </CAccordionBody>
      </CAccordionItem>

    </CAccordion>

  )
}

export default React.memo(BillsAccordion)
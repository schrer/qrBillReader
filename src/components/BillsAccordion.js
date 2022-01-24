import React from 'react';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionCollapse, CAccordionBody } from '@coreui/react';
import BillTable from './BillTable';

// const [activeKey, setActiveKey] = useState(0);
let activeKey = 1;

function setActiveKey (key) {
  activeKey = key;
}

const BillsAccordion = () => {
  return (
    <CAccordion>
      <CAccordionItem>
        <CAccordionHeader>
          Accordion Item #1
        </CAccordionHeader>
        <CAccordionCollapse visible={activeKey === 1}>
          <CAccordionBody>
            <BillTable/>
          </CAccordionBody>
        </CAccordionCollapse>
      </CAccordionItem>

      <CAccordionItem>
        <CAccordionHeader>
          Accordion Item #2
        </CAccordionHeader>

        <CAccordionCollapse visible={activeKey === 2}>
          <CAccordionBody>
            <BillTable/>
          </CAccordionBody>
        </CAccordionCollapse>
      </CAccordionItem>

    </CAccordion>

  )
}

export default React.memo(BillsAccordion)
import React from 'react';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionButton, CAccordionCollapse, CAccordionBody } from '@coreui/react';
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
          <CAccordionButton collapsed={activeKey !== 1} onClick={() => activeKey === 1 ? setActiveKey(0) : setActiveKey(1)}>
            Accordion Item #1
          </CAccordionButton>
        </CAccordionHeader>
        <CAccordionCollapse visible={activeKey === 1}>
          <CAccordionBody>
            <BillTable/>
          </CAccordionBody>
        </CAccordionCollapse>
      </CAccordionItem>

      <CAccordionItem>
        <CAccordionHeader>
          <CAccordionButton collapsed={activeKey !== 2} onClick={() => activeKey === 2 ? setActiveKey(0) : setActiveKey(2)}>
            Accordion Item #2
          </CAccordionButton>
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
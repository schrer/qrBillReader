import React from 'react';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import BillTable from './BillTable';
import { readR1Bills } from '../util/storage';
import { useLiveQuery } from 'dexie-react-hooks';


const BillsAccordion = () => {

    const qrBills = useLiveQuery(readR1Bills)
    return (
        <CAccordion activeItemKey={1}>

            {
                qrBills?.map(bill =>
                    <CAccordionItem itemKey={bill.id} key={bill.id}>
                        <CAccordionHeader>
                            {bill.billNumber}
                        </CAccordionHeader>
                        <CAccordionBody>
                            <BillTable bill={bill} />
                        </CAccordionBody>
                    </CAccordionItem>
                )
            }
        </CAccordion>
    )
}

export default React.memo(BillsAccordion)
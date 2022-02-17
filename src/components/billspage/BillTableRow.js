import CIcon from "@coreui/icons-react";
import { CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import * as icon from '@coreui/icons';

const BillTableRow = (props) => {
    return (
        <CTableRow onClick={() => {navigator.clipboard.writeText(props.content)}}>
            <CTableHeaderCell scope="row">{props.title}</CTableHeaderCell>
            <CTableDataCell className="d-flex">
                <div class="overflow-hidden">{props.content}</div>
                <CIcon className="ms-auto" icon={icon.cilClipboard}/>
            </CTableDataCell>
        </CTableRow>
    )
}; 

export default BillTableRow;
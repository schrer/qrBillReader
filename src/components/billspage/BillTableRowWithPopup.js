import CIcon from "@coreui/icons-react";
import { CButton, CPopover, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import * as icon from '@coreui/icons';

const buttonStyle = { 
    '--cui-btn-padding-x': 0,
    '--cui-btn-padding-y': 0,
  }

const BillTableRowPopup = (props) => {
    return (
        <CTableRow onClick={() => {navigator.clipboard.writeText(props.text)}}>
            <CTableHeaderCell scope="row">{props.title}</CTableHeaderCell>
            <CTableDataCell className="d-flex">
                <CPopover 
                    title={props.popupTitle}
                    content={props.popupText}
                    placement="bottom"
                    trigger="focus"
                >
                    <CButton style={buttonStyle} color="link" className=".text-nowrap">{props.text}</CButton>
                </CPopover>
                <CIcon className="ms-auto" icon={icon.cilClipboard}/>
            </CTableDataCell>
        </CTableRow>
    )
}; 

export default BillTableRowPopup;
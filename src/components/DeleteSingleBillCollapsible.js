import { CButton, CCollapse, CContainer, CRow } from "@coreui/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { deleteR1Bill } from '../util/storage';

async function deleteQrBill(qrBill) {
    await deleteR1Bill(qrBill.id)
        .then(deletecount => console.log(`Deleted bill ${qrBill.billNumber}`))
        .catch(error => console.error(`Failed to delete ${qrBill.billNumber} : ${error}`));
}

function switchDeleteButtonAppearance(visible, setDeleteButtonColor, setDeleteButtonText, setVisible, translate) {
    if (visible) {
        setVisible(false);
        setDeleteButtonColor("danger");
        setDeleteButtonText(translate('bill.delete.buttonDelete'));
    } else {
        setVisible(true);
        setDeleteButtonColor("dark");
        setDeleteButtonText(translate('bill.delete.buttonCancel'));
    }
}

const DeleteSingleBillCollapsible = (props) => {

    const translate = useTranslation().t;

    const [visible, setVisible] = useState(false);
    const [deleteButtonColor, setDeleteButtonColor] = useState("danger");
    const [deleteButtonText, setDeleteButtonText] = useState(translate('bill.delete.buttonDelete'));

    let bill = props.bill;

    return (
        <CContainer>
            <CRow>
                <CButton color={deleteButtonColor} variant='outline' onClick={() => switchDeleteButtonAppearance(visible, setDeleteButtonColor, setDeleteButtonText, setVisible, translate)}>
                    {deleteButtonText}
                </CButton>
            </CRow>
            <CRow className="m-3">
                <CCollapse visible={visible}>
                    <CContainer >
                        <CRow className="justify-content-center">{translate('bill.delete.confirmationText')}</CRow>
                        <CRow className="justify-content-center">
                            <CButton color="danger" onClick={() => deleteQrBill(bill)}>
                                {translate('bill.delete.buttonDelete')}
                            </CButton>
                        </CRow>
                    </CContainer>
                </CCollapse>
            </CRow>
        </CContainer>
    );
}

export default DeleteSingleBillCollapsible;

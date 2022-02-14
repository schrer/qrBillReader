import { CButton, CModal, CModalHeader, CModalFooter } from "@coreui/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { deleteR1Bill } from '../util/storage';

async function deleteQrBill (qrBill) {

    await deleteR1Bill(qrBill.id)
        .then(deletecount => console.log(`Deleted bill ${qrBill.billNumber}`))
        .catch(error => console.error(`Failed to delete ${qrBill.billNumber} : ${error}`));
}

const DeleteSingleBillModal = (props) => {

    const [visible, setVisible] = useState(false);
    const translate = useTranslation().t;

    let bill = props.bill;

    return (
        <>
            <CButton color="danger" variant='outline' onClick={(visible) => setVisible(!visible)}>
                {translate('bill.delete.buttonText')}
            </CButton>
            <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                    <CModalHeader>{translate('bill.delete.modalTitle')}</CModalHeader>
                </CModalHeader>
                <CModalFooter>
                    <CButton color="secondary" onClick={ () => this.setVisible(false)}>
                        {translate('bill.delete.modalCancel')}
                    </CButton>
                    <CButton color="danger" onClick={ () => deleteQrBill(bill) }>
                        {translate('bill.delete.modalOk')}
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default DeleteSingleBillModal;

import { cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { deleteAllR1Bills } from "../../util/storage";


async function deleteAllQrBills() {
    await deleteAllR1Bills()
        .then(() => console.log(`Deleted all bills from the database.`))
        .catch(error => console.error(`Failed to clear QRBill table : ${error}`));
}

function deleteAllAndCloseModal(setVisible) {
    deleteAllQrBills();
    setVisible(false);
}

const DeleteAllBillsModal = () => {
    const [visible, setVisible] = useState(false);
    const translate = useTranslation().t;

    return (
        <>
            <CButton color="light" onClick={() => setVisible(true)}>
                {translate('clearAll.button')}&nbsp;
                <CIcon icon={cilTrash} size="lg" />
            </CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{translate('clearAll.modalTitle')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    {translate('clearAll.modalTitle')}
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        {translate('clearAll.cancel')}
                    </CButton>
                    <CButton color="primary" onClick={() => deleteAllAndCloseModal(setVisible)}>
                        {translate('clearAll.confirm')}
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}



export default DeleteAllBillsModal;
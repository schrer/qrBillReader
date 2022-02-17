import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CNavLink,
    CNavItem,
    CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { useTranslation } from 'react-i18next';
import { deleteAllR1Bills } from '../../util/storage';

async function deleteAllQrBills(){
    await deleteAllR1Bills()
    .then(() => console.log(`Deleted all bills from the database.`))
    .catch(error => console.error(`Failed to clear QRBill table : ${error}`));
}

const AppHeader = () => {

    const translate = useTranslation().t;

    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderBrand className="mx-auto d-md-none" to="/">Header</CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavLink to="/" component={NavLink} activeClassName="active">
                            {translate('header.home')}
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink to="/about" component={NavLink}>
                            {translate('header.about')}
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem>
                        <CButton color="dark" variant="outline" onClick={() => deleteAllQrBills()}>
                        {translate('clearAll.button')}&nbsp;
                            <CIcon icon={cilTrash} size="lg"/>
                        </CButton>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    )
}

export default AppHeader;
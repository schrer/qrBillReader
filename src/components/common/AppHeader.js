import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CNavLink,
    CNavItem
} from '@coreui/react';
import { useTranslation } from 'react-i18next';
import DeleteAllBillsModal from '../billspage/DeleteAllBillsModal';


const AppHeader = (props) => {
    const translate = useTranslation().t;

    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderBrand className="mx-auto d-md-none" to="/">Header</CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavLink to="/" component={NavLink} activeclassname="active">
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
                    { props.showDeleteAll &&
                        <CNavItem>
                            <DeleteAllBillsModal />
                        </CNavItem>
                    }
                </CHeaderNav>
            </CContainer>
        </CHeader>
    )
}

export default AppHeader;
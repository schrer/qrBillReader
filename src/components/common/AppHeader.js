import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CNavLink,
    CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBell, cilList, cilEnvelopeOpen } from '@coreui/icons';
import { useTranslation } from 'react-i18next';

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
                        <CNavLink href="#">
                            <CIcon icon={cilBell} size="lg" />
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilList} size="lg" />
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilEnvelopeOpen} size="lg" />
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    )
}

export default AppHeader;
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    CContainer,
    CHeader,
    CHeaderNav,
    CNavLink,
    CNavItem,
    CHeaderToggler,
    CCollapse,
    CRow,
    CNavbar,
    CButton
} from '@coreui/react';
import { useTranslation } from 'react-i18next';
import DeleteAllBillsModal from '../billspage/DeleteAllBillsModal';
import { cilHamburgerMenu } from "@coreui/icons";
import CIcon from '@coreui/icons-react';


const AppHeader = (props) => {
    const translate = useTranslation().t;
    const [visible, setVisible] = useState(false);
    const location = useLocation().pathname;
    const navLinks = [];

    navLinks.push({ key: "home", to: "/", text: translate('header.home') });
    navLinks.push({ key: "about", to: "/settings", text: translate('header.settings') });
    navLinks.push({ key: "settings", to: "/about", text: translate('header.about') });

    return (
        <CHeader position="sticky" className="mb-4">
            <CRow className='flex-fill justify-content-center' >
                <CCollapse className="header-collapse" visible={visible}>
                    {navLinks?.map(link =>
                        <CRow key={link.key}>
                            <CNavItem className='d-flex justify-content-center align-items-center'>
                                <CButton variant='ghost' color='dark' size='lg' as={NavLink} to={link.to}>{link.text}</CButton>
                            </CNavItem>
                        </CRow>
                    )}
                </CCollapse>
            </CRow>
            <CContainer fluid>
                <CNavbar>
                    <CHeaderNav>
                        <CHeaderToggler className='d-lg-none' onClick={() => setVisible(!visible)}>
                            <CIcon size='lg' icon={cilHamburgerMenu} />&nbsp;
                            {getCurrentPageName(location, navLinks)}
                        </CHeaderToggler>
                        {navLinks?.map(link =>
                            <CNavItem  key={link.key} className='d-none d-lg-block'>
                                <CNavLink to={link.to} as={NavLink}>
                                    {link.text}
                                </CNavLink>
                            </CNavItem>
                        )}

                    </CHeaderNav>
                </CNavbar>
                {props.showDeleteAll &&
                    <div className="end-0">
                        <DeleteAllBillsModal />
                    </div>
                }
            </CContainer>
        </CHeader>
    )
}

function getCurrentPageName(location, navLinks) {
    const currentLink = navLinks.find(link => link.to === location);
    if (!currentLink) {
        return navLinks.find(link => link.to === "/").text;
    }

    return currentLink.text;
}

export default AppHeader;
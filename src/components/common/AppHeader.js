import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    CContainer,
    CHeader,
    CHeaderNav,
    CNavLink,
    CNavItem,
    CDropdownToggle,
    CDropdown,
    CDropdownMenu,
    CDropdownItem
} from '@coreui/react';
import { useTranslation } from 'react-i18next';
import DeleteAllBillsModal from '../billspage/DeleteAllBillsModal';
import {useLocation} from 'react-router-dom';


const AppHeader = (props) => {
    const translate = useTranslation().t;
    const location = useLocation();
    //console.log(location)

    // <CHeaderNav className="d-none d-md-flex me-auto">
    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderNav>
                    <CNavItem className='d-none d-lg-block'>
                        <CNavLink to="/" component={NavLink} activeclassname="active">
                            {translate('header.home')}
                        </CNavLink>
                    </CNavItem>
                    <CNavItem className='d-none d-lg-block'>
                        <CNavLink to="/about" component={NavLink}>
                            {translate('header.about')}
                        </CNavLink>
                    </CNavItem>
                    <CNavItem className='d-lg-none'>
                        <CDropdown variant="nav-item" popper={false}>
                            <CDropdownToggle color="secondary">{getCurrentPageName(translate, location)}</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem component={NavLink} to="/">{translate('header.home')}</CDropdownItem>
                                <CDropdownItem component={NavLink} to="/about">{translate('header.about')}</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
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

function getCurrentPageName(translate, location){
    if (location.pathname === '/about') {
        return translate('header.about');
    }
    return translate('header.home')
}

export default AppHeader;
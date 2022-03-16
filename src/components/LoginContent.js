import React, { Suspense } from 'react';
import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CFormLabel, CRow, CSpinner } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import doLogin from '../util/api/login';

const LoginContent = () => {
    const translate = useTranslation().t;

    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8} lg={4}>
                            <CCard>
                                <CCardBody className='p-3'>
                                    <CForm onSubmit={handleSubmit}>
                                        <CRow className="mb-3">
                                            <CFormLabel htmlFor="inputLoginEmail">{translate("login.email")}</CFormLabel>
                                            <CFormInput type="email" id="inputLoginEmail" placeholder="name@example.com" />
                                        </CRow>
                                        <CRow className="mb-3">
                                            <CFormLabel htmlFor='inputLoginPassword'>{translate("login.password")}</CFormLabel>
                                            <CFormInput type="password" id='inputLoginPassword' />
                                        </CRow>
                                        <CButton type='submit' color="primary">
                                            {translate("login.submit")}
                                        </CButton>
                                    </CForm>

                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CContainer>
            </Suspense>
        </CContainer>
    )
};

function handleSubmit(event) {
    event.preventDefault()

    const email = event.target.querySelector('#inputLoginEmail').value
    const password = event.target.querySelector('#inputLoginPassword').value
    if (!email || !password) {
        return;
    }

    doLogin(email, password);

}

export default React.memo(LoginContent);
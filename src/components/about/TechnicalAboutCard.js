import { CCard, CCardBody, CCardText, CCardTitle, CLink, CListGroup, CListGroupItem, CRow } from "@coreui/react";
import { useTranslation } from "react-i18next";

const TechnicalAboutCard = (props) => {
    const translation = useTranslation().t;

    return (
        <CRow>
            <CCard>
                <CCardBody>
                    <CCardTitle>{translation('about.technical.title')}</CCardTitle>
                    <CCardText>{translation('about.technical.sourceLinkText')} <CLink href="https://github.com/schrer/qrBillReader">{translation('about.technical.sourceLinkTitle')}</CLink></CCardText>
                    <CCardText style={{"whiteSpace": "pre-line"}}>{translation('about.technical.attribution')}</CCardText>
                    <CListGroup>
                        <CListGroupItem>
                            <CCardText>
                                <CLink href="https://reactjs.org/">
                                    {translation('about.technical.react')}
                                </CLink>
                            </CCardText>
                        </CListGroupItem>
                        <CListGroupItem>
                            <CCardText>
                                <CLink href="https://github.com/react-qr-reader/react-qr-reader">
                                    {translation('about.technical.qrReader')}
                                </CLink>
                            </CCardText>
                        </CListGroupItem>
                        <CListGroupItem>
                            <CCardText>
                                <CLink href="https://coreui.io/">
                                    {translation('about.technical.coreui')}
                                </CLink>
                            </CCardText>
                        </CListGroupItem>
                        <CListGroupItem>
                            <CCardText>
                                <CLink href="https://dexie.org/">
                                    {translation('about.technical.dexie')}
                                </CLink>
                            </CCardText>
                        </CListGroupItem>
                        <CListGroupItem>
                            <CCardText>
                                <CLink href="https://react.i18next.com/">
                                    {translation('about.technical.i18next')}
                                </CLink>
                            </CCardText>
                        </CListGroupItem>
                    </CListGroup>
                </CCardBody>
            </CCard>
        </CRow>
    );
};

export default TechnicalAboutCard;
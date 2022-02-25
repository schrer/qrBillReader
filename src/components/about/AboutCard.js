import { CCard, CCardBody, CCardText, CCardTitle, CRow } from "@coreui/react";
import { useTranslation } from "react-i18next";

const AboutCard = (props) => {
    const translation = useTranslation().t;
    const tlKeyPrefix = props.translation;

    if (!tlKeyPrefix) {
        return (<></>);
    }

    return (
        <CRow>
            <CCard>
                <CCardBody>
                    <CCardTitle>{translation(tlKeyPrefix + '.title')}</CCardTitle>
                    <CCardText style={{"whiteSpace": "pre-line"}}>{translation(tlKeyPrefix + '.content')}</CCardText>
                </CCardBody>
            </CCard>
        </CRow>
    );
};

export default AboutCard;
import { CFormSwitch, CListGroupItem } from "@coreui/react";


const SettingsSwitch = (props) => {
    const id = props.id;
    const label = props.label;
    const defaultChecked = props.defaultChecked;
    const onChange = props.onChange;


    return (
        <CListGroupItem>
            <CFormSwitch id={id} label={label} defaultChecked={defaultChecked} onChange={onChange}/>
        </CListGroupItem>
    );
}

export default SettingsSwitch;



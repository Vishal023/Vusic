import React, {useContext, useState} from 'react';
import '../assets/scss/ControlsToggleButton.scss';
import {ThemeContext} from "../../api/Theme";

function ControlsToggleButton(props) {
    let ButtonOne = props.defaultIcon;
    let ButtonTwo = props.changeIcon;
    const [buttonType, setButton] = useState(false);

    function handleChange() {
        setButton(!buttonType);
        props.onClicked(props.type,!buttonType);
    }

    return (
        <div style={props.style}
             onClick={handleChange}
             className={props.type}>
            {
                !buttonType ?
                    ButtonOne :
                    ButtonTwo
            }
        </div>
    );
}

export default ControlsToggleButton;

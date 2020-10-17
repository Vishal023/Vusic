import React, {useState} from 'react';
import '../assets/scss/ControlsToggleButton.scss';
import Button from "@material-ui/core/Button";

function ControlsToggleButton(props) {
    let ButtonOne = props.defaultIcon;
    let ButtonTwo = props.changeIcon;
    const [buttonType, setButton] = useState(false);

    function handleChange() {
        if (props.type === "prev" || props.type === "next") {
            setButton(true);
            props.onClicked(props.type, true);
        }else{
            setButton(!buttonType);
            props.onClicked(props.type, !buttonType);
        }
    }

    return (
        <Button
            style={props.style}
            onClick={handleChange}
            className={props.type}>
            {
                !buttonType ?
                    ButtonOne :
                    ButtonTwo
            }
        </Button>
    );
}

export default ControlsToggleButton;

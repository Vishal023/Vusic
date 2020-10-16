import React, {useContext, useState} from 'react';
import '../assets/scss/HoverButton.scss';
import {Button} from "@material-ui/core";
import {ThemeContext} from "../../api/Theme";

function HoverButton({text,variant}) {
    const useStyle = useContext(ThemeContext);
    const [currStyle, setCurrStyle] = useState(null);
    const handleOver = () => {
        setCurrStyle(useStyle.button.onHover)
    };
    const handleOut = () => {
        setCurrStyle(null)
    };
    return (
        <Button href={"/home/" + text.toLowerCase()} style={currStyle}
                onMouseOver={handleOver} onMouseOut={handleOut}
                variant={variant}
                className={"hb"}>
            {text}
        </Button>
    );
}

export default HoverButton;
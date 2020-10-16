import React, {useContext} from 'react';
import '../assets/scss/NavigationButton.scss';
import {ThemeContext} from "../../api/Theme";

function NavigationButton(props) {
    const useStyle = useContext(ThemeContext);
    return (
        <React.Fragment>
            <a style={useStyle.button.outlined} href={props.href}>{props.name}</a>
        </React.Fragment>
    );
}

export default NavigationButton;
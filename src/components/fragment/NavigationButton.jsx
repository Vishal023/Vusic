import React, {useContext} from 'react';
import '../assets/scss/NavigationButton.scss';
import {ThemeContext} from "../../api/Theme";
import {Link} from "react-router-dom";

function NavigationButton(props) {
    const useStyle = useContext(ThemeContext);
    return (
        <React.Fragment>
            <Link to={props.href} className={"Nav-btn"}  style={useStyle.button.outlined} >
                {props.name}
            </Link>
        </React.Fragment>
    );
}

export default NavigationButton;
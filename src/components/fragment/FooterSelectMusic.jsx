import React, {useContext} from 'react';
import '../assets/scss/FooterSelectMusic.scss';
import {ThemeContext} from "../../api/Theme";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div style={{backgroundColor:useStyle.theme}} className={"Footer_Select_Music"}>
            <p>Select a music to continue</p>
        </div>
    );
}

export default FooterSelectMusic;
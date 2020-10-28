import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton variant={"text"} text={"Profile"}/>
            {/*<HoverButton variant={"text"} text={"Settings"}/>*/}
        </div>
    );
}
export default DropDownProfile;
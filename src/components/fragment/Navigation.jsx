import React, {useContext, useState} from "react";

import '../assets/scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DropDownLanguageList from "./DropDownLanguageList";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import DropDownProfile from "./DropDownProfile";
import {Avatar} from "@material-ui/core";
import NavigationButton from "./NavigationButton";
import {ThemeContext} from "../../api/Theme";

function Navigation() {

    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);


    function handleOpenLanguageList() {
        setLangList(!isLanguageListOpen);
    }

    function handleOpenProfile() {
        setOpenProfile(!isOpenProfile);
    }

    const pointer = {
        cursor: "pointer"
    };
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <div className={"navigation"}>
                <NavigationButton href={"/home"} name={"Home"}/>
                <NavigationButton href={"/browse"} name={"Browse"}/>
                <NavigationButton href={"/add"} name={"Add"}/>
            </div>
            <SearchBar/>
            <div style={pointer} className={"language"} onClick={handleOpenLanguageList}>
                <div className={"language-head"}>
                    <div>
                        <p>Music Languages</p>
                    </div>
                    <div>
                        <p style={{color: "gray"}}>
                            {
                                "language"
                            }
                        </p>
                    </div>
                </div>
                <div className={"expand-grp"}>
                    {!isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                </div>
                <div>
                    {!isLanguageListOpen ? null : <DropDownLanguageList/>}
                </div>
            </div>
            <div style={pointer} className="profile" onClick={handleOpenProfile}>
                <div>
                    <Avatar>
                        VS
                    </Avatar>
                </div>
                <div>
                    {!isOpenProfile ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                    <div>
                        {!isOpenProfile ? null : <DropDownProfile/>}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
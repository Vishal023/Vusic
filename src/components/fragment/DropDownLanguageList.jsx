import React, {useContext} from "react";
import '../assets/scss/DropDown.scss';
import Button from "@material-ui/core/Button";
import LangList from "./LangList";
import {ThemeContext} from "../../api/Theme";

const DropDownLanguageList = () => {

    const useStyle = useContext(ThemeContext);

    const listOfLanguage = [
        "Hindi",
        "English",
        "Punjabi",
        "Tamil",
        "Telugu"
    ];
    return(
        <div style={useStyle.component} className="dropdown">
            <div className="dropdown-head">
                <h3>What music do you like?</h3>
                <p>Pick the language you want to listen to</p>
            </div>
            <div className={"lang-list"}>
                {listOfLanguage.map((item)=>{
                    return(
                        <LangList key={item} item={item}/>
                    );
                })}
            </div>
            <div className={"button-div"}>
                <Button style={useStyle.button.contained}>
                    Update
                </Button>
            </div>
        </div>
    );
}
export default DropDownLanguageList;
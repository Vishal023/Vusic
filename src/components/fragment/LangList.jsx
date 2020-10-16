import React, {useContext, useEffect, useState} from 'react';
import '../assets/scss/LangList.scss';
import Button from "@material-ui/core/Button";
import {ThemeContext} from "../../api/Theme";

function LangList(props) {
    const [isSelected,setSelected] = useState(false);
    const handleSelected = e => {
        e.stopPropagation();
        setSelected(!isSelected);
    };
    const useStyle = useContext(ThemeContext);
    const [onSelect,setOnSelect] = useState({});
    useEffect(()=> {
        if (isSelected){
            setOnSelect(useStyle.button.onHover)
        }else{
            setOnSelect({})
        }
    },[isSelected, useStyle.button.onHover])
    return (
        <Button style={onSelect} onClick={handleSelected} variant={"text"}>
            {props.item}
        </Button>
    );
}

export default LangList;
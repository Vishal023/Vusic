import React, {useContext, useEffect, useState} from 'react';
import '../assets/scss/LangList.scss';
import Button from "@material-ui/core/Button";
import {ThemeContext} from "../../api/Theme";

function LangList(props) {
    const [isSelected, setSelected] = useState(false);
    const handleSelected = e => {
        e.stopPropagation();
        props.onClick(props.item,!isSelected);
        setSelected(!isSelected);
    };
    const useStyle = useContext(ThemeContext);
    const [onSelect, setOnSelect] = useState({});
    useEffect(() => {
        if (isSelected) {
            setOnSelect(useStyle.button.onHover)
        } else {
            setOnSelect({})
        }
    }, [isSelected, useStyle.button.onHover])
    return (
        <Button style={onSelect} onClick={handleSelected}>
            {props.item}
        </Button>
    );
}

export default LangList;
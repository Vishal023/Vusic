import React, {useRef} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

function SideBarOptions(props) {
    const Icon = props.Icon;
    const title = props.title;
    const className = props.className;
    const sideBarRef = useRef();
    return (
        <Button onClick={()=>{sideBarRef.current.click();}} className={className} startIcon={Icon && <Icon/>}>
            {
                title === "Home"
                    ?
                    <Link ref={sideBarRef} to={"/" + title.toLowerCase()}/>
                    :
                    <Link ref={sideBarRef} to={"/home/" + title.toLowerCase()}/>
            }
            {title}
        </Button>
    );
}

export default SideBarOptions;
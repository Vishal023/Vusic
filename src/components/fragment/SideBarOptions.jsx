import React from "react";
import {Button} from "@material-ui/core";

class SideBarOptions extends React.Component {
    render() {
        const Icon = this.props.Icon;
        const title = this.props.title;
        const className =  this.props.className;
        return (
            <Button className={className} startIcon={Icon && <Icon/>}>
               {title}
            </Button>
        );
    }
}

export default SideBarOptions;
import React from "react";
import SearchBar from "./SearchBar";
import '../assets/scss/MobTopNav.scss';
import Brand from "./Brand";

class MobileTopNavigation extends React.Component{
    render() {
        return(
            <nav className="mob-top-navigation">
                <Brand/>
                <SearchBar/>
            </nav>
        );
    }
}

export default MobileTopNavigation;
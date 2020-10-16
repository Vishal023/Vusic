import React from "react";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import CancelIcon from "@material-ui/icons/Cancel";
import '../assets/scss/SearchBar.scss';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleSearchBarOpen = this.handleSearchBarOpen.bind(this);
        this.state = {
            isSearchBarOpen: false
        };
    }
    handleSearchBarOpen(){
        this.setState(state=>({
            isSearchBarOpen: !state.isSearchBarOpen
        }));
    }
    render() {
        const isSearchBarOpen = this.state.isSearchBarOpen;
        const searchStyle = {
            position: "relative",
            left: (window.innerWidth <= 500) ? (isSearchBarOpen?"-80%":"-51%") : (isSearchBarOpen?"-85%":"-51%") ,
            transform: 'translateX(+"+isSearchBarOpen?"-98%":"-51%")',
            color: "gray",
            width: "0"
        };
        const searchCancelStyle = {
            display: (window.innerWidth <= 500) && "none",
            position: "relative",
            right: "10%",
            color: "gray",
            width: "0"
        };
        const expandSearch = {
            transform: "scaleX(1.05)",
        };
        return(
            <div className="search">
                <div className={"search-container"}>
                    <input id={"search-input"} type="text" style={isSearchBarOpen?expandSearch:null}  onClick={this.handleSearchBarOpen}/>
                    <div style={searchStyle} onClick={this.handleSearchBarOpen}>
                        <SearchSharpIcon  className="search-icon" fontSize="small" />
                        {
                            !isSearchBarOpen &&
                            <p className={"hide"}>&nbsp;Search</p>
                        }
                    </div>
                    {
                        isSearchBarOpen &&
                        <div style={searchCancelStyle} onClick={this.handleSearchBarOpen} >
                            <p>Close&nbsp;</p>
                            <CancelIcon className="cancel" fontSize="small" />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default SearchBar;
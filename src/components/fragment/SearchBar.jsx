import React, {useState} from "react";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import CancelIcon from "@material-ui/icons/Cancel";
import '../assets/scss/SearchBar.scss';

const SearchBar = () => {
    const [isSearchBarOpen, setSearchBarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchBarOpen = () => {
        setSearchBarOpen(!isSearchBarOpen);
    };

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    const searchStyle = {
        position: "relative",
        left: (window.innerWidth <= 500) ? (isSearchBarOpen ? "-80%" : "-51%") : (isSearchBarOpen ? "-85%" : "-51%"),
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
    return (
        <div className={"SearchBar"}>
            <div className={"search-container"}  onClick={handleSearchBarOpen}>
                <input id={"search-input"}
                       name={"searchQuery"}
                       value={searchQuery}
                       onChange={handleSearchQuery}
                       type="text"
                       style={isSearchBarOpen ? expandSearch : null}
                        />

                <div style={searchStyle} >
                    <SearchSharpIcon className="search-icon" fontSize="small"/>
                    {
                        !isSearchBarOpen &&
                        <p className={"hide"}>&nbsp;Search</p>
                    }
                </div>
                {
                    isSearchBarOpen &&
                    <div style={searchCancelStyle} >
                        <p>Close&nbsp;</p>
                        <CancelIcon className="cancel" fontSize="small"/>
                    </div>
                }
            </div>
        </div>
    );
}

export default SearchBar;
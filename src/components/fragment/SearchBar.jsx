import React, {useEffect, useRef, useState} from "react";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import CancelIcon from "@material-ui/icons/Cancel";
import '../assets/scss/SearchBar.scss';

const SearchBar = () => {
    const [isSearchBarOpen, setSearchBarOpen] = useState(false);
    const handleSearchBarOpen = () => {
        setSearchBarOpen(!isSearchBarOpen);
    };
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };
    const searchRef = useRef();
    useEffect(()=>{
        if (isSearchBarOpen === true){
            searchRef.current.focus();
        }
    });
    return (
        <div className={`${isSearchBarOpen ? "SearchBar  open":"SearchBar"}`}>
            <div className={"search-container"}>
                {
                    isSearchBarOpen &&
                    <>
                        <SearchSharpIcon  style={{color: "grey"}} className="search-icon" fontSize="small"/>
                        <input id={"search-input"}
                               name={"searchQuery"}
                               value={searchQuery}
                               onChange={handleSearchQuery}
                               placeholder={"Search a track..."}
                               type="text"
                               ref={searchRef}
                        />
                    </>
                }
            </div>
            {
                !isSearchBarOpen &&
                <div className={"SearchBar-customPlaceholderOpen"}
                     onClick={handleSearchBarOpen}>
                    <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                    <p>&nbsp;Search</p>
                </div>
            }
            {
                isSearchBarOpen &&
                <div className={"SearchBar-customPlaceholderClose"}
                     onClick={handleSearchBarOpen}>
                    <p>Close&nbsp;</p>
                    <CancelIcon style={{color: "grey"}} className="cancel" fontSize="small"/>
                </div>
            }


        </div>
    );
};

export default SearchBar;
import React, {useEffect, useState} from 'react';
import './css/Search.scss';
import Container from "../fragment/Container";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/MusicCard";

const Search = () => {
    const {playlists, search} = useSelector(state => state.musicReducer);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setSearchResult(playlists.filter((i) => (
            (i.name.toLowerCase().startsWith(search))
            ||
            (i.author_name.toLowerCase().startsWith(search))
            ||
            (i.musicName.toLowerCase().startsWith(search))
            ||
            (i.lang && i.lang.toLowerCase().startsWith(search))
        )));
    }, [search, playlists]);
    return (
        <Container>
            {
                search === ""
                &&
                <div className={"Search"}>
                    <h3>Type in search box to search an item</h3>
                </div>
            }
            <div className={"Search-result"}>
                {
                    searchResult.map((item) => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                }
            </div>
        </Container>
    );
}

export default Search;
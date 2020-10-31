import React from 'react';
import './css/Search.scss';
import Container from "../fragment/Container";

const Search = () => {
    return (
        <Container>
            <div className={"Search"}>
                <h3>Type in search box to search an item</h3>
            </div>
        </Container>
    );
}

export default Search;
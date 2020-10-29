import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";

function MusicCardContainer() {
    const {playlists} = useSelector(state => state.musicReducer);
    return (
        <div className={"music-card-container"}>
            {
                playlists.map(item => (
                    <MusicCard key={item.id} music={item}/>
                ))
            }
        </div>
    );
}

export default MusicCardContainer;

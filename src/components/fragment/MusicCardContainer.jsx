import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import musicDB from "../../db/music";
import MusicCard from "./MusicCard";

function MusicCardContainer() {
    return (
        <div className={"music-card-container"}>
            {
                musicDB.map(item => (
                    <MusicCard key={item.id} music={item}/>
                ))
            }
        </div>
    );
}

export default MusicCardContainer;

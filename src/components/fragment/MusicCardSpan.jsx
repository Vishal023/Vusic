import React from 'react';
import '../assets/scss/MusicCardSpan.scss';
import {PlayArrow} from "@material-ui/icons";
import MusicCard from "./MusicCard";

function MusicCardSpan() {
    return (
        <div className={"MusicCardSpan"}>
            <div className={"d1"}>
                <img src={require("../assets/img/buttabomma.jpg")} alt=""/>
                <div className="detail">
                    <h4>HAPPIER</h4>
                    <p>MarshMello</p>
                </div>
            </div>
            <div className="play">
                <PlayArrow fontSize={"large"}/>
            </div>
        </div>
    );
}

export default MusicCardSpan;
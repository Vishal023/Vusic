import React from 'react';
import '../assets/scss/Music.scss';
import MusicCardSpan from "./MusicCardSpan";

function MusicCardLong() {
    return (
        <div className={"gradient-wrap MusicCardLong"}>
            <div className="music-left">
                <img src={require("../assets/img/happier.jpg")} alt=""/>
                <div className="detail">
                    <h3>HAPPIER</h3>
                    <p>MarshMello</p>
                </div>
            </div>
            <div className="music-right">
                <h3>Queue</h3>
                <div className={"music-card-span"}>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                    <MusicCardSpan/>
                </div>
            </div>

        </div>
    );
}

export default MusicCardLong;

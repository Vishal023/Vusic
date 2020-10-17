import React from 'react';
import '../assets/scss/MusicCardSpan.scss';
import {PlayArrow} from "@material-ui/icons";

function MusicCardSpan({music}) {
    return (
        <div style={{cursor:"pointer"}} className={"MusicCardSpan"}>
            <div className={"d1"}>
                <img src={require("../assets/img/"+music.img)} alt=""/>
                <div className="detail">
                    <h4>{music.name}</h4>
                    <p>{music.author_name}</p>
                </div>
            </div>
            <div className="play">
                <PlayArrow fontSize={"large"}/>
            </div>
        </div>
    );
}

export default MusicCardSpan;
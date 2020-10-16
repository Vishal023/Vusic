import React from 'react';
import '../assets/scss/Profile.scss';
import {Avatar} from "@material-ui/core";
import MusicCard from "./MusicCard";
import musicDB from "../../db/music";
function Profile() {

    return (
        <div className={"gradient-wrap Profile"}>
            <div className="top-profile">
                <Avatar src={require("../assets/img/avatar.jpg")} style={{width: "200px", height: "200px"}}>
                    VS
                </Avatar>
                <div className="profile-detail">
                    <h3>Vishal Singh</h3>
                    <p>2 Public Playlists | 1 Private Playlist | 1 Follower</p>
                </div>
            </div>
            <div className="bottom-profile">
                <div>
                    <h3>Most Played</h3>
                    <div className="most-played">
                        {
                            musicDB.map(item => (
                                <MusicCard key={item.id} music={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

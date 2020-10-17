import React, {useContext} from "react";
import HistoryIcon from '@material-ui/icons/History';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"} >
            <div className="library-container">
                <SideBarOptions className={"lib-sub"} Icon={HistoryIcon} title={"History"}/>
                <SideBarOptions className={"lib-sub"} Icon={MusicNoteIcon} title={"Songs"}/>
                <SideBarOptions className={"lib-sub"} Icon={AlbumIcon} title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} title={"Artist"}/>
            </div>
            <div className="playlist-container">
                <div className={"playlist"}>
                    <p className={"p1"}>MY PLAYLIST</p>
                    <div className={"list-cont"}>
                        <HoverButton variant={"text"} text={"All"}/>
                        <HoverButton variant={"text"} text={"English"}/>
                        <HoverButton variant={"text"} text={"Hindi"}/>
                        <HoverButton variant={"text"} text={"Other"}/>
                    </div>
                </div>
            </div>
        </aside>
    );
}
/*
*
* */
export default SideBar;
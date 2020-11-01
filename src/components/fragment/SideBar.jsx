import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import HistoryIcon from '@material-ui/icons/History';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import {Add, PlaylistPlay} from "@material-ui/icons";
import {Button} from "@material-ui/core";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <SideBarOptions className={"lib-sub"} Icon={HistoryIcon} title={"History"}/>
                <SideBarOptions className={"lib-sub"} Icon={MusicNoteIcon} title={"Songs"}/>
                <SideBarOptions className={"lib-sub"} Icon={AlbumIcon} title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} title={"Artist"}/>
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>MY PLAYLIST</span>
                    {/*<Button>
                        <Add/>
                    </Button>*/}
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} title={"Instrumental"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} title={"Electronic"}/>
            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;
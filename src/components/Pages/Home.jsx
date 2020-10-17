import React, {useContext, useEffect, useState} from "react";
import './css/Home.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import {useSelector} from "react-redux";
import {ThemeContext} from "../../api/Theme";
import Profile from "../fragment/Profile";
import AddMusic from "../fragment/AddMusic";
import FooterSelectMusic from "../fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";

function getCurrPage(pathName) {
    switch (pathName) {
        case "/home":
            return <MusicCardContainer/>
        case "/home/profile":
            return <Profile/>
        case "/home/add":
            return <AddMusic/>
        default:
            return null
    }
}

function Home() {


    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const useStyle = useContext(ThemeContext);
    let pathname = window.location.pathname;
    const {playing,bannerOpen} = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    return (
        <div style={useStyle.component} className={"home-container"}>
            {
                screenSize <= 970 ?
                    <MobileTopNavigation/> :
                    <Navigation/>
            }
            <section className={"home-music-container"}>
                <div className="sidebar-home">
                    <SideBar/>
                </div>
                <div className="main-home">
                    {
                        getCurrPage(pathname)
                    }
                </div>
            </section>
            {
                bannerOpen
                    &&
                <section className="current-large-banner">
                    <CurrentPlayingLarge/>
                </section>
            }
            <React.Fragment>
                {
                    currMusic ? <FooterMusicPlayer music={currMusic}/> : <FooterSelectMusic/>
                }
                {
                    screenSize <= 970 && <BottomNavigationMobile/>
                }
            </React.Fragment>
        </div>
    );
}

export default Home;
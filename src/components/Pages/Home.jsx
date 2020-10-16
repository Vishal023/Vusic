import React, {useContext, useEffect, useState} from "react";
import './css/Home.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import {useDispatch, useSelector} from "react-redux";
import {ThemeContext} from "../../api/Theme";
import Profile from "../fragment/Profile";
import AddMusic from "../fragment/AddMusic";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import {Add} from "@material-ui/icons";
import {prev} from "../../actions/actions";
import musicReducer from "../../reducers/musicReducer";
function getCurrPage(pathName){
    switch (pathName){
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
function Home(){
    const [screenSize,setScreenSize] = useState(undefined);
    window.addEventListener("resize",handleResize);
    function handleResize(){ setScreenSize(window.innerWidth); }
    useEffect(()=>{
        handleResize();
        return ()=> window.removeEventListener("resize",handleResize);
    });

    const useStyle = useContext(ThemeContext);
    let pathname = window.location.pathname;


    return(
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
            {/*<MusicCardLong/>*/}
            <React.Fragment>
                <FooterMusicPlayer />
                {
                    screenSize <= 970 && <BottomNavigationMobile/>
                }
            </React.Fragment>
        </div>
    );
}

export default Home;
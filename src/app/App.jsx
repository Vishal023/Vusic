import React, {useContext, useEffect, useState} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Login from "../components/Pages/Login";
import Grade from 'grade-js'
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import musicReducer from "../reducers/musicReducer";

const App = () => {
    window.addEventListener('load', function () {
        Grade(document.querySelectorAll('.gradient-wrap'))
    })

    /*const useStyle = useContext(ThemeContext);*/

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setPlaylist(musicDB))
    },[dispatch]);


    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;
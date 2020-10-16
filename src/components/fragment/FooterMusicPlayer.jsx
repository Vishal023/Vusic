import React, {useContext, useEffect, useRef, useState} from "react";
import '../assets/scss/FooterPlayer.scss';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Slider from "@material-ui/core/Slider";
import {Avatar} from "@material-ui/core";
import ControlsToggleButton from "./ControlsToggleButton";
import Name from "./Name";
import {ThemeContext} from "../../api/Theme";
import {useDispatch, useSelector} from "react-redux";
import {getNextTrack, getPrevTrack, setCurrentPlaying} from "../../actions/actions";


function FooterMusicPlayer() {

    const [{id,name,author_name,img,lang,timesPlayed,musicName},setCurrTrack] = useState({
        id:25,
        name: "Happier",
        author_name: "Marshmello",
        img: "happier.jpg",
        lang: "ENGLISH",
        timesPlayed:0,
        musicName:"happier.mp3"
    });
    const [track,setTrack] = useState(require("../assets/music/"+musicName));
    const [isRepeatClicked, setRepeatClick] = useState(false);
    const [isPrevClicked, setPrevClicked] = useState(false);
    const [isNextClicked, setNextClicked] = useState(false);
    const [isPlaying, setPlayPauseClicked] = useState(false);
    const [isVolumeClicked, setVolumeClicked] = useState(false);
    const [volume, setVolume] = useState(50);
    const [seekTime, setSeekTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currTime, setCurrTime] = useState(0);

    const handleToggle = (type,val) => {
        switch (type){
            case "repeat":
                setRepeatClick(val);
                break;
            case "prev":
                setPrevClicked(val);
                break;
            case "play-pause":
                setPlayPauseClicked(val);
                break;
            case "next":
                setNextClicked(val);
                break;
            case "volume":
                setVolumeClicked(val);
                break;
            default:
                break;
        }
    };
    const handleSeekChange = (event) => {
        setSeekTime(event.target.value)
    };
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };

    const audioElement = useRef();

    useEffect(() => {
        isPlaying ? audioElement.current.play() : audioElement.current.pause();
        audioElement.current.loop = isRepeatClicked;
        audioElement.current.volume = volume / 100;
        audioElement.current.muted = isVolumeClicked;
        audioElement.current.onloadeddata = () => {
            if (audioElement.current!=null)
                setDuration(audioElement.current.duration)
        };
        setInterval(() => {
            if (audioElement.current!==null)
                setCurrTime(audioElement.current.currentTime);
        })
    });
    useEffect(() => {
        setSeekTime((currTime) / (duration / 100))
    }, [currTime, duration]);

    const {playing,nextTrack} = useSelector(state => state.musicReducer);

    useEffect(()=>{
        if(playing!=null){
            setCurrTrack(playing);
            setTrack(require("../assets/music/"+musicName))
        }
    }, [musicName, playing]);

    const dispatch = useDispatch();


    useEffect(()=>{
        if (isNextClicked){
            dispatch(getNextTrack(id))
        }
    });

    console.log(nextTrack)

    function formatTime(secs) {
        const t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        let s = t.toTimeString().substr(0, 8);
        if (secs > 86399)
            s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return s.substring(3);
    }

    const useStyle = useContext(ThemeContext);

    const pointer = {
        cursor: "pointer",
        color:useStyle.theme
    };

    return (
        <div className={"footer-player"}>
            <div className="playback">
                <input className={"playback-completed"}
                       value={seekTime.toString()}
                       onChange={handleSeekChange}
                       type="range"/>
            </div>
            <div className="curr-music-container">
                <div className="curr-music-cover">
                    <Avatar variant="square" src={require("../assets/img/" + img)}
                            alt={"random-image"}/>
                </div>
                <div className="curr-music-details">
                    <Name name={name} className={"song-name"} length={name.length}/>
                    <Name name={author_name} className={"author-name"}
                          length={author_name.length}/>
                </div>
            </div>
            <div className="playback-controls">

                <ControlsToggleButton style={pointer} type={"repeat"}
                                      defaultIcon={<RepeatIcon fontSize={"large"}/>}
                                      changeIcon={<RepeatOneIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>

                <ControlsToggleButton style={pointer} type={"prev"}
                                      defaultIcon={<SkipPreviousIcon fontSize={"large"}/>}
                                      changeIcon={<SkipPreviousIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>

                <audio ref={audioElement} src={track} preload={"metadata"}/>

                <ControlsToggleButton style={pointer} type={"play-pause"}
                                      defaultIcon={<PlayArrowIcon fontSize={"large"}/>}
                                      changeIcon={<PauseIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>


                <ControlsToggleButton style={pointer} type={"next"}
                                      defaultIcon={<SkipNextIcon fontSize={"large"}/>}
                                      changeIcon={<SkipNextIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>
            </div>
            <div className="playback-widgets">
                <div className="timer">
                    <p>
                        <span>{formatTime(currTime)}</span>
                        /
                        <span>{formatTime(duration)}</span>
                    </p>
                </div>
                <div className={"slider"}>
                    <Slider style={{color:useStyle.theme}} value={volume} onChange={handleVolumeChange}/>
                </div>
                <ControlsToggleButton style={pointer} type={"volume"}
                                      defaultIcon={<VolumeUpIcon/>}
                                      changeIcon={<VolumeOffIcon/>}
                                      onClicked={handleToggle}/>
            </div>
        </div>

    );
}

export default FooterMusicPlayer;
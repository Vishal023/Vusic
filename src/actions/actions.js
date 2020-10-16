export const setPlaylist = (playlist) => {
    return {
        type:"SET_PLAYLIST",
        payload:playlist
    };
};
export const setCurrentPlaying = (curr_music) => {
    return {
        type: "SET_CURR_PLAYING",
        payload: curr_music
    };
}
export const getPrevTrack = (id) => {
    return {
        type:"SET_PREV_TRACK",
        payload: id-1
    };
};

export const getNextTrack = (id) => {
    return {
        type:"SET_NEXT_TRACK",
        payload: id+1
    };
};


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

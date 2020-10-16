export const initialState = {
    playlists: [],
    playing:null,
    nextTrack:null,
    prevTrack:null
};
const musicReducer = (state=initialState,action) => {
    switch (action.type){
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.payload
            }
        case "SET_CURR_PLAYING":
            return {
                ...state,
                playing: action.payload
            }
        case "SET_PREV_TRACK":
            return {
                ...state,
                prevTrack: state.playlists.filter(i => i.id === action.payload)
            }
        case "SET_NEXT_TRACK":
            return {
                ...state,
                nextTrack: state.playlists.filter(i => i.id === action.payload)
            }
        default:
            return state;
    }
};

export default musicReducer;
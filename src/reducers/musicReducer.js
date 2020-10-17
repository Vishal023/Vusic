export const initialState = {
    playlists: [],
    playing:null,
    bannerOpen: false
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
        case "SET_BANNER_OPEN":
            return {
                ...state,
                bannerOpen: action.payload
            };
        default:
            return state;
    }
};

export default musicReducer;
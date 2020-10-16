/* Reducers gives new state to your component */
/*
*/
const postReducer = (state=[],action)=> {
    switch (action.type){
        case 'ADD_POST':
            return state.concat([action.data])
        default:
            return state;
    }
};
export default postReducer;

/* Index.js */
/*
* 1. Create the store*/

/*
import {createStore} from "redux";
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';
const store = createStore(postReducer);
<Provider store={store}>
    <App/>
</Provider>
*/



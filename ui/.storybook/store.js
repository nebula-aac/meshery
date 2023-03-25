import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk"
import { Map } from 'immutable';

const dummyReducer = (state = Map(), action) => {
    return state;
}

const store = createStore(
    dummyReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
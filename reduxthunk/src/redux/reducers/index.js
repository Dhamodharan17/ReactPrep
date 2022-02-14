import { combineReducers } from "redux";
import IceCreamReducer from './Icecream-reducer';

const reducers = combineReducers({
    IceCreamReducer: IceCreamReducer
});

export default reducers;
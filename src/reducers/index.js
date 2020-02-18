import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { carFeatureReducer } from "./carFeatureReducer";


export const rootReducer = combineReducers({
    carReducer,
    carFeatureReducer
});
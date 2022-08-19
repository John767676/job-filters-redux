import {combineReducers} from "redux";
import {positionReducer} from "./position/positionReducer";
import {filterReducer} from "./filter/filterReducer";


export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
})
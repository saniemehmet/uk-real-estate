import { combineReducers } from "@reduxjs/toolkit";
import actionTypes from "./actionTypes";

export function area(state='', action){
    switch(action.type){
        case actionTypes.SET_AREA:
            return action.payload;
        default:
            return state
    }
}

export function suggestions(state=[], action){
    switch(action.type){
        case actionTypes.SET_AREA_SUGGESTIONS:
            return [...action.payload];
        default:
            return state
    }
}

export default combineReducers({area, suggestions});
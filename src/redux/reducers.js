import { combineReducers } from "@reduxjs/toolkit";
import actionTypes from "./actionTypes";

export function area(state = '', action) {
    switch (action.type) {
        case actionTypes.SET_AREA:
            return action.payload;
        default:
            return state
    }
}

export function suggestions(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_AREA_SUGGESTIONS:
            return [...action.payload];
        default:
            return state
    }
}

export function selectedSortBy(state = '', action) {
    switch (action.type) {
        case actionTypes.SET_SELECTED_SORT_BY:
            return action.payload;
        default:
            return state
    }
}

export function furnishedValue(state = '', action) {
    switch (action.type) {
        case actionTypes.SET_FURNISHED_VALUE:
            return action.payload;
        default:
            return state
    }
}

export function minBedrooms(state = 0, action) {
    switch (action.type) {
        case actionTypes.SET_MIN_BEDROOMS:
            return action.payload;
        default:
            return state
    }
}

export function properties(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_PROPERTIES:
            return [...action.payload];
        default:
            return state
    }
}

export function listView(state = true, action) {
    switch (action.type) {
        case actionTypes.SET_LIST_VIEW:
            return action.payload;
        default:
            return state
    }
}

export default combineReducers({ area, suggestions, selectedSortBy, furnishedValue, minBedrooms, properties, listView });
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

export function minimumPrice(state = 0, action) {
    switch (action.type) {
        case actionTypes.SET_MINIMUM_PRICE:
            return action.payload;
        default:
            return state
    }
}

export function maximumPrice(state = 0, action) {
    switch (action.type) {
        case actionTypes.SET_MAXIMUM_PRICE:
            return action.payload;
        default:
            return state
    }
}

export function isFiltersVisible(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_FILTERS_VISIBLE:
            return action.payload;
        default:
            return state
    }
}

export function listingsVisible(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_LISTINGS_VISIBLE:
            return action.payload;
        default:
            return state
    }
}

export default combineReducers({
    area, suggestions,
    selectedSortBy, furnishedValue,
    minBedrooms, properties,
    listView, minimumPrice, 
    maximumPrice, isFiltersVisible,
    listingsVisible
});
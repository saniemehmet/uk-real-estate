import axios from "axios";
import constants from "../constants";
import actionTypes from "./actionTypes";

const configHeaders = {
    headers: {
        'x-rapidapi-host': constants.apiHost,
        'x-rapidapi-key': constants.apiKey
    }
}

export function setArea(value) {
    return {
        type: actionTypes.SET_AREA,
        payload: value
    }
}

export function setSuggestions(value) {
    return {
        type: actionTypes.SET_AREA_SUGGESTIONS,
        payload: value
    }
}

export function getSuggestions(path, area) {
    const data = { params: { search_term: area, search_type: 'listings' } };
    const config = { ...configHeaders, ...data };
    // const config = {
    //     params: { search_term: area, search_type: 'listings' },
    //     headers: {
    //         'x-rapidapi-host': constants.apiHost,
    //         'x-rapidapi-key': constants.apiKey
    //     }
    // };
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}`, config)
                .then(response => {
                    const suggestionsList = response.data.suggestions.map(x => x.value);
                    dispatch(setSuggestions(suggestionsList));
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export function setSelectedSortBy(value) {
    return {
        type: actionTypes.SET_SELECTED_SORT_BY,
        payload: value
    }
}

export function setFurnishedValue(value) {
    return {
        type: actionTypes.SET_FURNISHED_VALUE,
        payload: value
    }
}

export function setMinBedrooms(value) {
    return {
        type: actionTypes.SET_MIN_BEDROOMS,
        payload: value
    }
}

export function setProperties(value) {
    return {
        type: actionTypes.SET_PROPERTIES,
        payload: value
    }
}

export function getProperties(path, params) {
    const data = { params: params };
    const config = { ...configHeaders, ...data };
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}`, config)
                .then(response => {
                    console.log(response.data.listing);
                    dispatch(setProperties(response.data.listing));
                })
        } catch (error) {
            console.log(error);
        }
    }
}
export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value
    }
}
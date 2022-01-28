import axios from "axios";
import constants from "../constants";
import actionTypes from "./actionTypes";

export function setArea(value){
    return {
        type: actionTypes.SET_AREA,
        payload: value
    }
}

export function setSuggestions(value){
    return {
        type: actionTypes.SET_AREA_SUGGESTIONS,
        payload: value
    }
}

export function getSuggestions(path, area){
    const config = {
        params: { search_term: area, search_type: 'listings' },
        headers: {
            'x-rapidapi-host': constants.apiHost,
            'x-rapidapi-key': constants.apiKey
        }
    };
    return async(dispatch) => {
        try{
            axios.get(`${constants.baseUrl}${path}`, config)
            .then(response => {
                const suggestionsList = response.data.suggestions.map(x => x.value);
                dispatch(setSuggestions(suggestionsList));
            })
        }catch(error){
            console.log(error);
        }
    }
}
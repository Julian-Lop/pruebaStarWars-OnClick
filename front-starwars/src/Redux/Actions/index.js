import axios from 'axios'
import {
    GET_ALL_FILMS,
    GET_ALL_STARSHIPS,
    GET_ALL_VEHICLES,
    RESET_STATE,
    GET_ALL_PEOPLE
} from '../Actions/types.js'

export const getAllFilms = () => {
    return async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/films/?format=json`)
            return dispatch({type: GET_ALL_FILMS, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllStarships = (page) => {
    return  async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/starships/?page=${page?page:1}`)
            return dispatch({type: GET_ALL_STARSHIPS, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllVehicles = (page) => {
    return async function(dispatch){
        try {
            let json = await axios(`${process.env.REACT_APP_URL_SWAPI}/vehicles/?page=${page?page:1}`)
            return dispatch({type: GET_ALL_VEHICLES, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}


export const resetState = (info) => {
    return function(dispatch){
        return dispatch({type: RESET_STATE, payload:info})
    }
}


export const getAllPeople = (arrayPeople) => {
    return async function(dispatch){
        try {
            let json = []
            for(let i = 0; i < arrayPeople.length; i++){
                let temp = await axios(`${arrayPeople[i]}`)
                json.concat(temp.data)
            }
            return dispatch({type: GET_ALL_PEOPLE, payload: await json})
        } catch (error) {
            
        }
    }
}
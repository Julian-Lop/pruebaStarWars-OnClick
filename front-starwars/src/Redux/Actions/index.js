import axios from 'axios'
import {
    GET_ALL_FILMS
} from '../Actions/types.js'

export const getAllFilms = () => {
    return async function(dispatch){
        try {
            let json = await axios(``)
            return dispatch({type: GET_ALL_FILMS, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}
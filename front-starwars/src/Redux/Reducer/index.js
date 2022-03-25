import { GET_ALL_FILMS } from "../Actions/types" 

const initialState = {
    films : []
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_FILMS:
            return{
                ...state,
                films : payload
            }
        default:
        return state
    }
}
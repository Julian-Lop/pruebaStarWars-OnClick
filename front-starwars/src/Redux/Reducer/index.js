import {
    GET_ALL_FILMS,
    GET_ALL_STARSHIPS,
    GET_ALL_VEHICLES,
    RESET_STATE,
    GET_ALL_PEOPLE
} from "../Actions/types" 

const initialState = {
    films : [],
    starships : [],
    vehicles : [],
    people : []
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_FILMS:
            return{
                ...state,
                films : payload
            }
        
        case GET_ALL_STARSHIPS:
            return{
                ...state,
                starships : payload
            }
        
        case GET_ALL_VEHICLES:
            return{
                ...state,
                vehicles : payload
            }

        case RESET_STATE:
            if(payload === 'vehicles'){
                return{
                    ...state,
                    vehicles : []
                }
            }else{
                return{
                    ...state,
                    starships : []
                }
            }
        
        case GET_ALL_PEOPLE:
            return{
                ...state,
                people : payload
            }   

        default:
        return state
    }
}
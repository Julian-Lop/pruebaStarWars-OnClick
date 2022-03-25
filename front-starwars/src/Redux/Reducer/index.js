import {
    GET_ALL_FILMS,
    GET_ALL_STARSHIPS,
    GET_ALL_VEHICLES,
    RESET_STATE,
    GET_ALL_PEOPLE,
    GET_CHARACTERS_BY_FILM
} from "../Actions/types" 

const initialState = {
    films : [],
    starships : [],
    vehicles : [],
    characters : []
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
                characters : [...state.characters.concat(payload)]
            }
        
        case GET_CHARACTERS_BY_FILM:

            state.characters.map(character => {
                character.films.map(filmcharact => {
                    let indexFilm = Number(filmcharact.substr(-2,1))
                    if(!state.films.results[indexFilm-1].people){
                        state.films.results[indexFilm-1].people = []
                    } 
                    state.films.results[indexFilm-1].people.push(character)
                    
                })
            })
            return{
                ...state
            }
        default:
        return state
    }
}
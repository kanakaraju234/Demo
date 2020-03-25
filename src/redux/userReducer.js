import { ADD_ITEMS, LOAD_ITEMS } from '../redux/Costants';

export function Items(state=[],action){
    switch(action.type){
        case ADD_ITEMS:
            return [...state, action.items]
        
        case LOAD_ITEMS:
            return action.itemsList

            default: return state
    }
}
import { ADD_ITEMS } from '../redux/Costants';

export function addItems(items){
    console.log('actions..')
    console.log(items)
    return {
        type:ADD_ITEMS,
        items
    }
}



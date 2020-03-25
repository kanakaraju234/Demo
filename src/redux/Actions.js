import { ADD_ITEMS, LOAD_ITEMS } from '../redux/Costants';
import { database } from '../components/firestore';


export function startAddItems(items){
    return (dispatch ) => {

      return  database.ref('productInfo').push(items).then(()=>{
          dispatch(addItems(items))
      }).catch((error)=>{
          console.log(error)
      })
    }
}

export function loadingListOfItems(){
    return dispatch => {
        return database.ref('productInfo').once('value').then((snapShot)=>{
            let itemsList =[]
            snapShot.forEach((item)=>{
                itemsList.push({...item.val(),id: item.key})
            })
            console.log(itemsList)
            dispatch(loadItems(itemsList))
        }).catch((error)=>{
            console.log(error)
        })
    }
}


export function addItems(items){
    
    return {
        type: ADD_ITEMS ,
        items
    }

}

export function loadItems(itemsList){

    return {
        type: LOAD_ITEMS,
        itemsList
    }
}

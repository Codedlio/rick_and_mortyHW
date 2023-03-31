 const initialState={
    myFavorites:[]
 }
 const reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_FAV":
            return{...state, myFavorites:payload}
        case "REMOVE_FAV":
            return{...state, myFavorites:state.myFavorites.filter(ch=>ch.id!=payload)}    
        default:
            return state
    }

}
export default reducer
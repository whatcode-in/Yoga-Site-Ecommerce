
export let Ordereduser =(state={order:null},action)=>{
    switch (action.type) {
        case "GETORDER":
            state.order=action.payload
            return {...state}
    
        default:
            return {...state}
    }
}
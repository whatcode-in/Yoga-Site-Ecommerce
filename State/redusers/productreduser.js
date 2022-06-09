export let productreduser=(state={tshirts:[],hoodies:[]},action)=>{
        switch (action.type) {
            case "GETALLTSHIRTS":
                state.tshirts=action.payload
                return {...state}
            case "GETALLHOODIES":
                state.hoodies=action.payload
                return {...state}
            default:
                return {...state}
        }
}
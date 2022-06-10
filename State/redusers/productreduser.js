export let productreduser=(state={tshirts:[],hoodies:[],mugs:[],stickers:[]},action)=>{
        switch (action.type) {
            case "GETALLTSHIRTS":
                state.tshirts=action.payload
                return {...state}
            case "GETALLHOODIES":
                state.hoodies=action.payload
                return {...state}
            case "GETALLMUGS":
                state.mugs=action.payload
                return {...state}
            case "GETALLSTICKERS":
                state.stickers=action.payload
                return {...state}
            default:
                return {...state}
        }
}
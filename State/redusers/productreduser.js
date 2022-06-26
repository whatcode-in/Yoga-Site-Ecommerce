import { GETALLHOODIES, GETALLMUGS, GETALLSTCIKERS, GETALLTSHIRTS } from "../../Constents"

export let productreduser=(state={tshirts:[],hoodies:[],mugs:[],stickers:[]},action)=>{
        switch (action.type) {
            case GETALLTSHIRTS:
                state.tshirts=action.payload
                return {...state}
            case GETALLHOODIES:
                state.hoodies=action.payload
                return {...state}
            case GETALLMUGS:
                state.mugs=action.payload
                return {...state}
            case GETALLSTCIKERS:
                state.stickers=action.payload
                return {...state}
            default:
                return {...state}
        }
}
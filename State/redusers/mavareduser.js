import { ADDPRODUCT, DELETEPRODUCTBYID, GETALLTPRODUCTS, GETPRODUCTBYCATEGORY, GETPRODUCTBYID, UPDATEPRODUCT } from "../../Constents"

export let mavaproductreduser=(state={item1:[],item2:[],item3:[],item4:[],products:[],product:null},action)=>{
        switch (action.type) {
            case ADDPRODUCT:
                if(action.payload.success===true){
                    return {...state}
                }
                return {...state}
            case GETALLTPRODUCTS:
                state.products=action.payload
                return {...state}
            case DELETEPRODUCTBYID:
                if(action.payload.success===true){
                    return {...state,products:state.products.filter(doc=>{doc.id!=action.payload.id})}
                }
                return {...state}
            case GETPRODUCTBYID:
                if(action.payload.success===true){
                    return {...state,product:action.payload.product}
                }
                return {...state}
            case GETPRODUCTBYCATEGORY:
                if(action.payload.success===true){
                    return {...state,products:action.payload.products}
                }
                return {...state}
            case UPDATEPRODUCT:
                if(action.payload.success===true){
                    return {...state,products:state.products.map(doc=>{
                        if(doc.id==action.payload.data.id){
                            return action.payload.data
                        }
                        return doc
                    })}
                }
                return {...state}
            
            default:
                return {...state}
        }
}
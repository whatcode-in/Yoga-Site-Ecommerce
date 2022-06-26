import { ADD, CLEAR, REMOVE } from "../../Constents"

let addToCart=(data)=>async (dispatch)=>{
    // console.log(data);
    dispatch({type:ADD,payload:data})
}

let clearCart=()=>{
    return {type:CLEAR,payload:{}}
}

let removeFromCart=(data)=>{
    return {type:REMOVE,payload:data}
}
export default {addToCart,clearCart,removeFromCart}
let reduser=(state={cart:{},subtotal:0},action)=>{
    switch (action.type) {
        case "ADD":
            // TODO:change state
            if (action.payload.itemcode in state.cart) {
                state.cart[action.payload.itemcode].qty=state.cart[action.payload.itemcode].qty+action.payload.qty;
                state.subtotal+=state.cart[action.payload.itemcode].price*action.payload.qty
                // console.log("hey");
            } else {
                console.log(action.payload);
                state.cart[action.payload.itemcode]=action.payload
                state.subtotal+=action.payload.price
                console.log(state.cart);
            }
            // console.log("state",state);
            
            return {...state}
        case "REMOVE":
            if (action.payload.itemcode in state.cart) {
                state.cart[action.payload.itemcode].qty=state.cart[action.payload.itemcode].qty-action.payload.qty
                state.subtotal-=state.cart[action.payload.itemcode].price*action.payload.qty
            }
            if(state.cart[action.payload.itemcode].qty<=0){
                delete state.cart[action.payload.itemcode]
            }
            return {...state}
         case "CLEAR":
            //  console.log("clear in reduser");
             state.cart={}
             state.subtotal=0
             return {...state}
        default:
            return {...state}
    }
}

export default reduser
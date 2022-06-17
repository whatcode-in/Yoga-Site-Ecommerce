const jwt=require('jsonwebtoken')
export let userreduser=(state={user:null},action)=>{
    switch (action.type) {
        case "SETUSER":
            state.user=jwt.decode(action.payload,"jwttoeknsecret");
            return {...state}
    
        default:
            return {...state}
    }
}
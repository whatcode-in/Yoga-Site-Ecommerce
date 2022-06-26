import { SETUSER } from "../../Constents"

export let setuser=(data)=>{
    return {
        type:SETUSER,
        payload:data
    }
}
import { combineReducers } from "redux";
import redusers from "./cartreduser";
import {tshirtreduser} from "./Tshirtreduser"
const reduser=combineReducers({
    cart:redusers,
    tshirts:tshirtreduser
})

export default reduser
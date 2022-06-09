import { combineReducers } from "redux";
import redusers from "./cartreduser";
import {productreduser} from "./productreduser"
const reduser=combineReducers({
    cart:redusers,
    products:productreduser
})

export default reduser
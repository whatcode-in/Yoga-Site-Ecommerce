import { combineReducers } from "redux";
import redusers from "./cartreduser";
import {productreduser} from "./productreduser"
import {userreduser} from "./userreduser"
const reduser=combineReducers({
    cart:redusers,
    products:productreduser,
    user:userreduser
})

export default reduser
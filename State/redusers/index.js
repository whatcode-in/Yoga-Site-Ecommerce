import { combineReducers } from "redux";
import redusers from "./cartreduser";
import {productreduser} from "./productreduser"
import {userreduser} from "./userreduser"
import { Ordereduser } from "./Orderreduser";
const reduser=combineReducers({
    cart:redusers,
    products:productreduser,
    user:userreduser,
    order:Ordereduser
})

export default reduser
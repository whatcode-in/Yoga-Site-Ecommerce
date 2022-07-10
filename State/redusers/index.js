import { combineReducers } from "redux";
import redusers from "./cartreduser";
import {productreduser} from "./productreduser"
import {userreduser} from "./userreduser"
import { Ordereduser } from "./Orderreduser";
import { mavaproductreduser } from "./mavareduser";
const reduser=combineReducers({
    cart:redusers,
    products:productreduser,
    user:userreduser,
    order:Ordereduser,
    mavaproducts:mavaproductreduser
})

export default reduser
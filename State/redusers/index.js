import { combineReducers } from "redux";
import redusers from "./cartreduser";

const reduser=combineReducers({
    cart:redusers
})

export default reduser
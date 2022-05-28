import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import redusers from "./redusers/index";
let store=createStore(redusers,{},applyMiddleware(thunk));
export default store

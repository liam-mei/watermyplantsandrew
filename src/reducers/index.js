import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { authReducer as auth } from "./auth";
import { plantReducer as plants } from "./plants";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    plants
});

export default createRootReducer
import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import cartReducer from "./cart-reducer";
import searchPayloadReducer from "./search-payload-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  searchPayload: searchPayloadReducer,
});

export default rootReducer;

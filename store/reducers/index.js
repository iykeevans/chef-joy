import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import searchPayloadReducer from "./search-payload-reducer";
import dishesReducer from "./dishes-reducer";
import chefReducer from "./chef-reducer";
import cartReducer from "./cart-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  searchPayload: searchPayloadReducer,
  dishes: dishesReducer,
  chef: chefReducer,
  cart: cartReducer,
});

export default rootReducer;

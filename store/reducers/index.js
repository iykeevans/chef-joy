import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import searchPayloadReducer from "./search-payload-reducer";
import dishesReducer from "./dishes-reducer";
import chefReducer from "./chef-reducer";
import cartReducer from "./cart-reducer";
import reviewReducer from "./review-reducer";
import geoLocationReducer from "./geo-location-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  searchPayload: searchPayloadReducer,
  dishes: dishesReducer,
  chef: chefReducer,
  cart: cartReducer,
  reviews: reviewReducer,
  geoLocation: geoLocationReducer,
});

export default rootReducer;

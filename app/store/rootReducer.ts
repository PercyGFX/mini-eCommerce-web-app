import { combineReducers } from "redux";
import { productReducer } from "./slices/products.slice";
import { favouriteReducer } from "./slices/favourites.slice";

const rootReducer = combineReducers({
  products: productReducer,
  favourites: favouriteReducer,
});

export default rootReducer;

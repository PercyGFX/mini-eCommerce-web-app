import { combineReducers } from "redux";
import { productReducer } from "./slices/products.slice";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;

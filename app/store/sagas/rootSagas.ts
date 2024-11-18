import { takeLatest } from "redux-saga/effects";
import { handleAllProduct } from "./handlers/products";
import { requestProducts } from "../slices/products.slice";

export function* watcherSaga() {
  // all products
  yield takeLatest(requestProducts.type, handleAllProduct);
}

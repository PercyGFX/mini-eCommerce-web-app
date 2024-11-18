import { takeLatest } from "redux-saga/effects";
import { handleAllProduct, handleAddProducts } from "./handlers/products";
import { requestProducts, requestAddProduct } from "../slices/products.slice";

export function* watcherSaga() {
  // all products
  yield takeLatest(requestProducts.type, handleAllProduct);

  // add product
  yield takeLatest(requestAddProduct.type, handleAddProducts);
}

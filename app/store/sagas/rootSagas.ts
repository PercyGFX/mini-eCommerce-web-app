import { takeLatest } from "redux-saga/effects";
import {
  handleAllProduct,
  handleAddProducts,
  handleEditProducts,
  handleDeleteProducts,
  handleSingleProducts,
} from "./handlers/products";
import {
  requestProducts,
  requestAddProduct,
  requestEditProduct,
  requestDeleteProduct,
  requestSingleProduct,
} from "../slices/products.slice";

export function* watcherSaga() {
  // all products
  yield takeLatest(requestProducts.type, handleAllProduct);

  // add product
  yield takeLatest(requestAddProduct.type, handleAddProducts);

  // edit product
  yield takeLatest(requestEditProduct.type, handleEditProducts);

  // delete product

  yield takeLatest(requestDeleteProduct.type, handleDeleteProducts);

  // single product

  yield takeLatest(requestSingleProduct.type, handleSingleProducts);
}

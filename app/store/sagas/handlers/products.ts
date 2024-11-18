import { call, put, delay } from "redux-saga/effects";
import { getProducts } from "../requests/products";
import { handleAllProducts, errorProducts } from "../../slices/products.slice";

export function* handleAllProduct(action: any): Generator<any, void, any> {
  try {
    // call request
    const response = yield call(getProducts);
    if (response) {
      const { data } = response;
      // store data to reducer
      yield put(handleAllProducts({ data }));
    }
  } catch (err: any) {
    yield put(
      errorProducts(err.response?.data?.error || "Failed to fetch products")
    );
  }
}

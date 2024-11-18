import { call, put, delay } from "redux-saga/effects";
import { getProducts, addProduct, editProduct } from "../requests/products";
import {
  handleAllProducts,
  errorProducts,
  handleAddProduct,
  handleEditProduct,
} from "../../slices/products.slice";
import toast from "react-hot-toast";

// get all products
export function* handleAllProduct(action: any): Generator<any, void, any> {
  try {
    // call request
    const response = yield call(getProducts);
    if (response) {
      const { data } = response;
      yield put(handleAllProducts({ data }));
    }
  } catch (err: any) {
    yield put(
      errorProducts(err.response?.data?.error || "Failed to fetch products")
    );
  }
}

// add product

export function* handleAddProducts(action: any): Generator<any, void, any> {
  try {
    const response = yield call(addProduct, action.payload);
    if (response) {
      const { data } = response;
      yield put(handleAddProduct(data));
      toast.success("Product added successfully");

      window.location.href = "/";
    }
  } catch (err: any) {
    yield put(
      errorProducts(err.response?.data?.error || "Failed to add product")
    );
    toast.error("Failed to add product");
  }
}

// edit product

export function* handleEditProducts(action: any): Generator<any, void, any> {
  try {
    const response = yield call(editProduct, action.payload);
    if (response) {
      const { data } = response;
      console.log(data);
      yield put(handleEditProduct(data));
      toast.success("Product updated successfully");
      window.location.href = "/";
    }
  } catch (err: any) {
    yield put(
      errorProducts(err.response?.data?.error || "Failed to edit product")
    );
    toast.error("Failed to edit product");
  }
}

import { call, put, delay } from "redux-saga/effects";
import {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
  getSingleProduct,
} from "../requests/products";
import {
  handleAllProducts,
  errorProducts,
  handleAddProduct,
  handleEditProduct,
  handleDeleteProduct,
  handleSingleProduct,
  requestProducts,
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
      console.log(data, "data from handler");
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

// delete product

export function* handleDeleteProducts(action: any): Generator<any, void, any> {
  try {
    const response = yield call(deleteProduct, action.payload);
    if (response) {
      const { data } = response;
      yield put(handleDeleteProduct(action.payload));
      toast.success("Product deleted successfully");
      // fetch al products again
      //yield call(requestProducts);
    }
  } catch (err: any) {
    yield put(
      errorProducts(err.response?.data?.error || "Failed to delete product")
    );
    toast.error("Failed to delete product");
  }
}

// single product handler
export function* handleSingleProducts(action: any): Generator<any, void, any> {
  try {
    const response = yield call(getSingleProduct, action.payload);
    if (response) {
      const { data } = response;
      yield put(handleSingleProduct(data));
    }
  } catch (err: any) {
    yield put(
      errorProducts(
        err.response?.data?.error || "Failed to fetch product details"
      )
    );
    toast.error("Failed to fetch product details");
  }
}

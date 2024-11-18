import { createSlice } from "@reduxjs/toolkit";
import { error } from "console";

interface IProductState {
  products: any[];
  loading: boolean;
  addLoading?: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleAddProduct: (state, action) => {
      state.products.push(action.payload);
      state.addLoading = false;
    },
    handleDeleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p._id !== productId);
    },
    handleEditProduct: (state, action) => {
      const editedProduct = action.payload;
      const index = state.products.findIndex(
        (p) => p._id === editedProduct._id
      );
      if (index !== -1) {
        state.products[index] = editedProduct;
      }
    },
    handleAllProducts: (state, action) => {
      state.products = action.payload?.data?.data;
      state.loading = false;
      state.error = null;
    },

    // requests
    requestProducts: (state) => {
      state.loading = true;
    },
    requestAddProduct: (state) => {
      state.addLoading = true;
    },
    requestEditProduct: (state) => {
      state.addLoading = true;
    },
    requestDeleteProduct: (state) => {},

    //errors
    errorProducts: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.addLoading = false;
    },
  },
});

export const {
  handleAddProduct,
  handleDeleteProduct,
  handleEditProduct,
  handleAllProducts,
  requestProducts,
  requestAddProduct,
  requestEditProduct,
  requestDeleteProduct,
  errorProducts,
} = productSlice.actions;

export const productReducer = productSlice.reducer;

export default productSlice.reducer;

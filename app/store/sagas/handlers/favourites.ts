import { call, put, delay } from "redux-saga/effects";
import { getFavorites, updateFavorites } from "../requests/favourites";
import {
  errorFavorites,
  handleFavourites,
} from "../../slices/favourites.slice";
import toast from "react-hot-toast";

// get
export function* handleGetFavorites(): Generator<any, void, any> {
  try {
    const response = yield call(getFavorites);

    console.log(response.data, "handler");
    if (response) {
      yield put(handleFavourites(response.data.data));
    }
  } catch (err: any) {
    yield put(
      errorFavorites(err.response?.data?.error || "Failed to fetch favorites")
    );
  }
}

// update
export function* handleUpdateFavorites(action: any): Generator<any, void, any> {
  try {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const response = yield call(updateFavorites, { favorites });
    if (response) {
      const updatedResponse = yield call(getFavorites);
      if (updatedResponse) {
        yield put(handleFavourites(updatedResponse.data.data));
        toast.success("Favorites updated successfully");
      }
    }
  } catch (err: any) {
    yield put(
      errorFavorites(err.response?.data?.error || "Failed to update favorites")
    );
  }
}

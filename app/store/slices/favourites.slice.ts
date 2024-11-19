import { createSlice } from "@reduxjs/toolkit";

interface IFavoriteState {
  favorites: string[];
  favouriteProducts: any[];
  loading: boolean;
  error: string | null;
}

const initialState: IFavoriteState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") || "[]")
    : [],
  loading: false,
  favouriteProducts: [],
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const index = state.favorites.indexOf(productId);

      if (index === -1) {
        state.favorites.push(productId);
      } else {
        state.favorites.splice(index, 1);
      }

      // Sync with localStorage
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    // sync from database
    handleFavourites: (state, action) => {
      state.favorites = action.payload.favoriteIds;
      state.favouriteProducts = action.payload.products;
      state.loading = false;
      localStorage.setItem(
        "favorites",
        JSON.stringify(action.payload.favoriteIds)
      );
    },

    //requests
    requestFavorites: (state) => {
      state.loading = true;
    },

    errorFavorites: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  toggleFavorite,
  handleFavourites,
  requestFavorites,
  errorFavorites,
} = favoritesSlice.actions;

export const favouriteReducer = favoritesSlice.reducer;

export default favoritesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface IFavoriteState {
  favorites: string[];
  favouriteProducts: any[];
  loading: boolean;
  error: string | null;
}

// local storage issue on nextjs
const getFavoritesFromStorage = () => {
  if (typeof window !== "undefined") {
    const storedFavorites = window.localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }
  return [];
};

//local storage issue on nextjs
const setFavoritesToStorage = (favorites: string[]) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

const initialState: IFavoriteState = {
  favorites: getFavoritesFromStorage(),
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
      setFavoritesToStorage(state.favorites);
    },
    // sync from database
    handleFavourites: (state, action) => {
      state.favorites = action.payload.favoriteIds;
      state.favouriteProducts = action.payload.products;
      state.loading = false;
      setFavoritesToStorage(action.payload.favoriteIds);
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

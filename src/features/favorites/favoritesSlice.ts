import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types';

interface FavoritesState {
  items: Record<number, Product>;
}

const initialState: FavoritesState = {
  items: {},
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      if (!state.items[product.id]) {
        state.items[product.id] = product;
      }
    },

    removeFromFavorites: (state, action: PayloadAction<number>) => {
      delete state.items[action.payload];
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

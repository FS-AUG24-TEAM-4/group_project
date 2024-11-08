import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '@/types';

interface CartState {
  items: Record<number, CartItem>;
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      if (state.items[product.id]) {
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = { ...product, quantity: 1, clickedBuy: true };
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>,
    ) => {
      const { itemId, quantity } = action.payload;

      if (state.items[itemId]) {
        state.items[itemId].quantity = quantity;
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      delete state.items[action.payload];
    },

    toggleClickedBuy: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (state.items[productId]) {
        state.items[productId].clickedBuy = !state.items[productId].clickedBuy;
      }
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (state.items[productId]) {
        state.items[productId].quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (state.items[productId] && state.items[productId].quantity > 1) {
        state.items[productId].quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  toggleClickedBuy,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

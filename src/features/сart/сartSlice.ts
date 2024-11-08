import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types/cartItem';
import { Product } from '@/types/Product';

interface CartState {
  items: Record<string, CartItem>;
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

      const updatedItem = { ...product, quantity: 1, clickedBuy: true };

      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: updatedItem,
        },
      };
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>,
    ) => {
      const { itemId, quantity } = action.payload;

      if (!state.items[itemId]) {
        return state;
      }

      return {
        ...state,
        items: {
          ...state.items,
          [itemId]: { ...state.items[itemId], quantity },
        },
      };
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const newItems = { ...state.items };

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
      };
    },

    toggleClickedBuy: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      return {
        ...state,
        items: {
          ...state.items,
          [productId]: {
            ...state.items[productId],
            clickedBuy: !state.items[productId]?.clickedBuy,
          },
        },
      };
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, toggleClickedBuy } =
  cartSlice.actions;

export default cartSlice.reducer;

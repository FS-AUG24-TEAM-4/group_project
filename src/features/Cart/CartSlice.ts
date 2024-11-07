import { Device } from '@/types/Device';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem extends Device {
  quantity: number;
}

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
    addToCart: (state, action: PayloadAction<Device>) => {
      const product = action.payload;

      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: state.items[product.id]
            ? {
                ...state.items[product.id],
                quantity: state.items[product.id].quantity + 1,
              }
            : { ...product, quantity: 1 },
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
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

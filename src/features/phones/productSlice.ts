import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Device } from '@/types';

interface ProductState {
  products: Device[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProductStart(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    loadProductSuccess(state, action: PayloadAction<Device[]>) {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    },

    loadProductFailure(state, action: PayloadAction<string>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const {
  loadProductStart: loadProductStart,
  loadProductSuccess: loadProductSuccess,
  loadProductFailure: loadProductFailure,
} = productSlice.actions;

export default productSlice.reducer;

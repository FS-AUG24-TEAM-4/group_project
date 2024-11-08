import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProductsStart(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    loadProductsSuccess(state, action: PayloadAction<Product[]>) {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    },

    loadProductsFailure(state, action: PayloadAction<string>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { loadProductsStart, loadProductsSuccess, loadProductsFailure } =
  productSlice.actions;

export default productSlice.reducer;

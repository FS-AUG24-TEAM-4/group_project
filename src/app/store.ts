import { configureStore } from '@reduxjs/toolkit';

import phonesReducer from '../features/phones/phoneSlice';
import productReducer from '@/features/products/productSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { configureStore } from '@reduxjs/toolkit';

import phonesReducer from '../features/phones/phoneSlice';
import productReducer from '@/features/products/productSlice';
import burgerReducer from '@/features/burgermenu/burgerSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    products: productReducer,
    burger: burgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

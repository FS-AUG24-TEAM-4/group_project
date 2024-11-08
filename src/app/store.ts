import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import phonesReducer from '../features/phones/productSlice';
import productReducer from '@/features/products/productSlice';
import burgerReducer from '@/features/burgermenu/burgerSlice';
import persistedCartReducer from '..//features/сart/persistedCartReducer';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    products: productReducer,
    burger: burgerReducer,
    cart: persistedCartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;

/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import productReducer from '@/features/products/productSlice';
import burgerReducer from '@/features/burgermenu/burgerSlice';
import persistedCartReducer from '@/features/сart/persistedCartReducer';
import persistedFavoritesReducer from '@/features/favorites/persistedFavoritesReducer';

export const store = configureStore({
  reducer: {
    products: productReducer,
    burger: burgerReducer,
    cart: persistedCartReducer,
    favorites: persistedFavoritesReducer,
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

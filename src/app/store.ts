import { configureStore } from '@reduxjs/toolkit';

import phonesReducer from '../features/phones/phoneSlicer';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
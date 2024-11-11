import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './сartSlice';

const favoritesPersistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(
  favoritesPersistConfig,
  cartReducer,
);

export default persistedCartReducer;

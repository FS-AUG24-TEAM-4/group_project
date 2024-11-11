import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoritesReducer from './favoritesSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer,
);

export default persistedFavoritesReducer;

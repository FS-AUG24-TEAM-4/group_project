import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './themeSlice';

const themePersistConfig = {
  key: 'theme',
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export default persistedThemeReducer;

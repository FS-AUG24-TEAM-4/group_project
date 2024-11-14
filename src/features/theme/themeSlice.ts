import { createSlice } from '@reduxjs/toolkit';

import { Themes } from '@/enums/Themes';

interface ThemeState {
  themeMode: Themes;
}

const initialState: ThemeState = {
  themeMode: Themes.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeMode(state) {
      return {
        themeMode:
          state.themeMode === Themes.LIGHT ? Themes.DARK : Themes.LIGHT,
      };
    },
  },
});

export const { changeThemeMode } = themeSlice.actions;

export default themeSlice.reducer;

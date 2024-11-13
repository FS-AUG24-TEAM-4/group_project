import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  currentLanguage: string;
}

const initialState: LanguageState = {
  currentLanguage: localStorage.getItem('language') || 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.currentLanguage = action.payload;
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

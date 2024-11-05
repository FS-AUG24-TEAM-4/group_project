import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Phone} from '../../types/Phone';

interface PhoneState {
  phones: Phone[];
  loading: boolean;
  error: string | null;
}

const initialState: PhoneState = {
  phones: [],
  loading: false,
  error: null,
};

const phoneSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    loadPhonesStart(state) {
      state.loading = true;
      state.error = null;
    },
    loadPhonesSuccess(state, action: PayloadAction<Phone[]>) {
      state.loading = false;
      state.phones = action.payload;
    },
    loadPhonesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadPhonesStart, loadPhonesSuccess, loadPhonesFailure } =
  phoneSlice.actions;

export default phoneSlice.reducer;

import { Device } from '@/types/Device';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhoneState {
  phones: Device[];
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
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    loadPhonesSuccess(state, action: PayloadAction<Device[]>) {
      return {
        ...state,
        loading: false,
        phones: action.payload,
      };
    },
    loadPhonesFailure(state, action: PayloadAction<string>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { loadPhonesStart, loadPhonesSuccess, loadPhonesFailure } =
  phoneSlice.actions;

export default phoneSlice.reducer;

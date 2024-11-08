import { createSlice } from '@reduxjs/toolkit';

interface BurgerState {
  burgerStatus: boolean;
}

const initialState: BurgerState = {
  burgerStatus: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    changeBurgerState(state) {
      return {
        burgerStatus: !state.burgerStatus,
      };
    },
  },
});

export const { changeBurgerState } = burgerSlice.actions;

export default burgerSlice.reducer;

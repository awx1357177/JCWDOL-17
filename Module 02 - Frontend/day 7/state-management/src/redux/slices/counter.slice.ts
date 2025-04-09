/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

interface ICounter {
  value: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<ICounter>) => {
      state.value += action.payload.value;
      return state;
    },
    decrement: (state, action: PayloadAction<ICounter>) => {
      state.value -= action.payload.value;
      return state;
    },
    reset: (state, action: PayloadAction<ICounter>) => {
      state = initialState;
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

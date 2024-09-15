// src/features/result/resultSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  result: {},
};

// Create a slice of the store
const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state, action) {
      state.result = action.payload;
    },
  },
});

// Export the action creators and the reducer
export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;

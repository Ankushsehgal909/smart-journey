// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import resultReducer from '../store/resultSlice';

export const store = configureStore({
  reducer: {
    result: resultReducer,
  },
});

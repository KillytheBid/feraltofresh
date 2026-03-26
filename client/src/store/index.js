import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/bookingSlice';
import uiReducer from '../features/uiSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    ui: uiReducer,
  },
});

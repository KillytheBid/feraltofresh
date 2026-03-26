import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: null,
  error: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearMessages: (state) => {
      state.success = null;
      state.error = null;
    },
  },
});

export const { setLoading, setSuccess, setError, clearMessages } = uiSlice.actions;
export default uiSlice.reducer;

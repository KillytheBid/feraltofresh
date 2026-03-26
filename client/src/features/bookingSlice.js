import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submissions: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addSubmission: (state, action) => {
      state.submissions.push(action.payload);
    },
    clearSubmissions: (state) => {
      state.submissions = [];
    },
  },
});

export const { addSubmission, clearSubmissions } = bookingSlice.actions;
export default bookingSlice.reducer;

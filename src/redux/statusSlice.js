import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setStatus: (state, {payload}) => {
      return payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;

export const selectStatus = state => state.status;
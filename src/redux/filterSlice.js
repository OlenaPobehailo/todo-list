import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, { payload }) => {
            return payload
        }
    }
})

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilter = state => state.filter;
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',

    initialState: {
        login: '',
        isLoggedIn: false,
    },

    reducers: {
        logIn(state, { payload }) {
            state.login = payload;
            state.isLoggedIn = true;
        },

        logOut(state) {
            state.login = '';
            state.isLoggedIn = false;
        }
    }
})

export default userSlice.reducer;
export const { logIn, logOut } = userSlice.actions;
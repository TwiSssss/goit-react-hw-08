import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk, refreshThunk } from "./operations";

const initialState = {
    user: {
        email: null,
        name: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logoutThunk.fulfilled, () => initialState)
            .addCase(refreshThunk.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshThunk.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshThunk.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = slice.reducer;

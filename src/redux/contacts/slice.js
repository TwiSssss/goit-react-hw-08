import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, onDelete } from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};
const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(onDelete.fulfilled, (state, action) => {
                state.items = state.items.filter((contact) => contact.id !== action.payload);
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.items = [];
            })
            .addMatcher(isAnyOf(addContact.rejected, onDelete.rejected, fetchContacts.rejected, logoutThunk.rejected), (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addMatcher(isAnyOf(addContact.pending, onDelete.pending, fetchContacts.pending, logoutThunk.pending), (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(addContact.fulfilled, onDelete.fulfilled, fetchContacts.fulfilled, logoutThunk.fulfilled), (state) => {
                state.isLoading = false;
            });
    },
});

export const contactsReducer = slice.reducer;

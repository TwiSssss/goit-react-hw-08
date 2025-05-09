import {  createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, onDelete } from "./operations";


const initialState = {
    items: [],
    isLoading: false,
    error: null,
};
const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setFavorites: () => {},
    },
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
            .addMatcher(isAnyOf(addContact.rejected, onDelete.rejected, fetchContacts.rejected), (state, action) => {
                state.error = action.payload;
            })
            .addMatcher(isAnyOf(addContact.pending, onDelete.pending, fetchContacts.pending), (state, action) => {
                state.error = null;
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(addContact.fulfilled, onDelete.fulfilled, fetchContacts.fulfilled), (state, action) => {
                state.isLoading = false;
            });
    },
});

export const contactsReducer = slice.reducer;

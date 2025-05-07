import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, onDelete } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

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
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter));
});

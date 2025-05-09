import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const response = await goitAPI.get("/contacts");
        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkApi) => {
    try {
        const response = await goitAPI.post("/contacts", newContact);
        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
export const onDelete = createAsyncThunk("contacts/onDelete", async (contactId, thunkApi) => {
    try {
        const response = await goitAPI.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});

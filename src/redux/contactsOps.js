import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6815ca6832debfe95dbc6fc0.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkApi) => {
    try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
export const onDelete = createAsyncThunk("contacts/onDelete", async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});

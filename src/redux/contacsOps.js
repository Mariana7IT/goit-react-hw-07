import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://66bcd4cc24da2de7ff6bfcdf.mockapi.io/contacs";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
    try {
        const response = await axios.post(BASE_URL, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
       await axios.delete(`${BASE_URL}/${id}`);
       return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
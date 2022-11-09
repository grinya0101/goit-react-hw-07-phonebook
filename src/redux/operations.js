import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAxios = axios.create({
  baseURL: 'https://634401712dadea1175b2762c.mockapi.io',
  responseType: 'json',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchAxios.get('/contacts/');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await fetchAxios.post('/contacts/', { ...contact });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts.deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await fetchAxios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

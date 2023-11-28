import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperatioms';

//санка
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//санка
export const addContact = createAsyncThunk(
  'contacts/addСontact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await instance.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//санка
export const removeContact = createAsyncThunk(
  'contacts/deleteСontact',
  async (contactId, thunkAPI) => {
    try {
      await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

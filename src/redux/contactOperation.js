import { createAsyncThunk } from '@reduxjs/toolkit';
import { base } from 'redux/auth/authOperatioms';

//санка
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await base('/contacts');
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
      const { data } = await base.post(`/contacts`, contact);
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
      await base.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

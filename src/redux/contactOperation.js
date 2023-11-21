import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6557ec6bbd4bcef8b6134081.mockapi.io';
//санка- для генерування екшенів та створення запитів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', //унікаальний префікс створений самостійно
  async (_, thunkAPI) => {
    //асинхронна колбек функція, яка берев перший параметр данні ,які приходять зовні
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // завдяки rejectWithValue санка баче помилку
    }
  }
);
//санка
export const addContact = createAsyncThunk(
  'contacts/addСontact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
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
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

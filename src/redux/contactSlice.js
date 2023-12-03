import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contactOperation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //add
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.contacts.push(action.payload);
      state.contacts = [...state.contacts, action.payload];
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //remove
    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.isLoading = false;
    },
    [removeContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactReducer = contactsSlice.reducer;

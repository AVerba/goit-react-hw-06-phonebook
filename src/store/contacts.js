import { createSlice, createStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact() {},
    deleteContact() {},
    filterContact() {},
  },
});
export const { addContact, deleteContact, filterContact } = contacts.actions;

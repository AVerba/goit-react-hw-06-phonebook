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
    addContact(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(item => item !== payload),
      };
    },
    filterContact(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
});
export const { addContact, deleteContact, filterContact } = contacts.actions;

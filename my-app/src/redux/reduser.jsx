import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "myValue",
  initialState: {
    currensy: '',
    store: {}

  },
  reducers: {
    addContact(state, action) {
        console.log(action.payload);
    //   state.contacts.items.push(action.payload);
    },
    removeContact(state, action) {
        console.log(action.payload);
    },
  },
});

export const { addContact } = mySlice.actions;

export const { removeContact } = mySlice.actions;

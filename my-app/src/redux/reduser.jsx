import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "myValue",
  initialState: {
    currensy: {
      currencies: { __typename: "Currency", label: "USD", symbol: "$" },
    },
    store: {},
  },
  reducers: {
    addCurrensy(state, action) {
      state.currensy = action.payload;
    },
    addToStore(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addCurrensy } = mySlice.actions;

export const { addToStore } = mySlice.actions;

export const currencyValue = state => state.myValue.currensy.currencies

export const addProductState = state => state.myValue.store
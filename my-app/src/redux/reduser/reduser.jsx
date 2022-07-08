import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "myValue",
  initialState: {
    currensy: {
      currencies: { __typename: "Currency", label: "USD", symbol: "$" },
    },
    store: [],
    categore: "all",
  },
  reducers: {
    addCurrensy(state, action) {
      state.currensy = action.payload;
    },
    addToStore(state, action) {
      state.store.push(action.payload)
    },
    addCurentCategory(state, action) {
      state.categore = action.payload;
    },
  },
});

export const { addCurrensy } = mySlice.actions;

export const { addToStore } = mySlice.actions;

export const { addCurentCategory } = mySlice.actions;

export const currencyValue = (state) => state.myValue.currensy.currencies;

export const readProductStore = (state) => state.myValue.store;

export const currencyCategore = (state) => state.myValue.categore;

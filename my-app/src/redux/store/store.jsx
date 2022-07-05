import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mySlice } from '../reduser';

export const store = configureStore({
    reducer:{
        myValue: mySlice.reducer
    }
})

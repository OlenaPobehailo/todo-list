
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import filterReducer from './filterSlice';
import statusReducer from './statusSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer,
        status: statusReducer
    }
});

export default store;

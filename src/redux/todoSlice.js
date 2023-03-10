import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoItems: [
            { label: 'task 1', important: false, completed: false, id: nanoid() },
            { label: 'task 2', important: false, completed: false, id: nanoid() },
            { label: 'task 3', important: false, completed: false, id: nanoid() },
        ],
    },
    reducers: {
        addItem: (state, { payload }) => {
            const { id, label } = payload;
            state.todoItems.push({ id, label, completed: false, important: false });
        },
        deleteItem: (state, { payload }) => {
            state.todoItems = state.todoItems.filter((item) => item.id !== payload);
        },
        toggleCompleted: (state, { payload }) => {
            const item = state.todoItems.find((item) => item.id === payload);
            if (item) {
                item.completed = !item.completed;
            }
        },
        toggleImportant: (state, { payload }) => {
            const item = state.todoItems.find((item) => item.id === payload);
            if (item) {
                item.important = !item.important;
            }
        },
    },
});

export const { addItem, deleteItem, toggleCompleted, toggleImportant } = todoSlice.actions;

export default todoSlice.reducer;


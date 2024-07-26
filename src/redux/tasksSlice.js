import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        searchTitle: "",
        searchTime: "",
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
                time: new Date().toLocaleTimeString(),
            });
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
        editTask: (state, action) => {
            const task = state.tasks.find(
                (task) => task.id === action.payload.id
            );
            if (task) {
                task.title = action.payload.title;
            }
        },
        setSearchTitle: (state, action) => {
            state.searchTitle = action.payload;
        },
        setSearchTime: (state, action) => {
            state.searchTime = action.payload;
        },
    },
});

export const {
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    setSearchTitle,
    setSearchTime,
} = tasksSlice.actions;

export default tasksSlice.reducer;

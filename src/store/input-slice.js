import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "to-do",
  initialState: {
    task: "",
    tasks: [],
  },
  reducers: {
    setTaskName(state, action) {
      state.task = action.payload;
    },
    addTask(state) {
      const title = state.task.trim();

      state.tasks.push({
        id: Math.random(),
        title: title,
        done: false,
      });
      state.task = "";
    },
    DeleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
    ToggleTask(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { setTaskName, addTask, toggleTask, DeleteTask, ToggleTask } =
  inputSlice.actions;

export default inputSlice.reducer;

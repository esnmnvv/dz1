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
        title,
      });
      state.task = "";
    },
  },
});

export const { setTaskName, addTask, toggleTask } = inputSlice.actions;

export default inputSlice.reducer;

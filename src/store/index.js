import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./input-slice";

const store = configureStore({
  reducer: {
    todo: inputReducer,
  },
});

export default store;

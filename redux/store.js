import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the counter reducer

// Create Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

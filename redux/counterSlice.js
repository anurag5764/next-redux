import { createSlice } from "@reduxjs/toolkit";

// Function to load count from localStorage
const loadState = () => {
  if (typeof window !== "undefined") {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  }
  return 0;
};

// Create a Redux slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: loadState() },
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("count", JSON.stringify(state.value)); // Save to localStorage
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("count", JSON.stringify(state.value)); // Save to localStorage
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem("count", JSON.stringify(state.value)); // Save to localStorage
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;

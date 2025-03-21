"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice"; // Added reset import

export default function Counter() {
  // For Redux state
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // For local state if you're using it
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only showing client-rendered content after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip rendering the actual value until after client-side hydration
  if (!mounted) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
        {/* Or render a skeleton/placeholder */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">{count}</h1>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-center">Counter: {count}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

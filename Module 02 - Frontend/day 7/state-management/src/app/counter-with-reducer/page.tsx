/** @format */
"use client";
import { actionType, reducer } from "@/utils/reducers/counter.reducer";
import React, { useReducer } from "react";

export default function Page() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => dispatch({ type: actionType.INCREMENT, payload: 1 });
  const decrement = () => dispatch({ type: actionType.DECREMENT, payload: 1 });

  return (
    <center className="mt-4">
      <h1 className="font-bold text-xl mb-4">COUNTER WITH REDUCER</h1>
      <div className="flex justify-center items-center gap-2">
        <button className="p-2 border rounded-sm" onClick={decrement}>
          decrement
        </button>
        <div>{state.count}</div>
        <button className="p-2 border rounded-sm" onClick={increment}>
          increment
        </button>
      </div>
    </center>
  );
}

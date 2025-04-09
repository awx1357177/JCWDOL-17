/** @format */
"use client";
import { useCounter } from "@/utils/customHooks/counter";
import React from "react";

export default function Page() {
  const { counter, increment, decrement } = useCounter(0);
  return (
    <center className="flex justify-center items-center gap-2 mt-4">
      <button className="p-2 border rounded-sm" onClick={decrement}>
        decrement
      </button>
      <div>{counter}</div>
      <button className="p-2 border rounded-sm" onClick={increment}>
        increment
      </button>
    </center>
  );
}

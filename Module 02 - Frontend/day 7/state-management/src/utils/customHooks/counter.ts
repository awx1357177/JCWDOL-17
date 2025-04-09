/** @format */
"use client";
import { useState } from "react";

export function useCounter(value: number) {
  const [counter, setCounter] = useState<number>(value);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return { counter, increment, decrement };
}

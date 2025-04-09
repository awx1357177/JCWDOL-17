/** @format */
"use client";
import React from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div>
      {error.message}
      {/* <button className="border p-2" onClick={reset}>
        refresh
      </button> */}
    </div>
  );
}

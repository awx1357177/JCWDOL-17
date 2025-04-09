/** @format */

import CardSkeleton from "@/components/skeleton/card.skeleton";
import React from "react";

export default function Loading() {
  return (
    <center className="">
      <div className="max-w-screen-sm">
        <CardSkeleton />
      </div>
    </center>
  );
}

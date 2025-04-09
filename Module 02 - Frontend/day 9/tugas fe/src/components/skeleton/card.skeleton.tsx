/** @format */

import React from "react";
export default function CardSkeleton() {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body animate-pulse ">
        <h2 className="card-title">
          <div className=" bg-slate-700 h-[456]  max-w-[640] w-full rounded-md"></div>
        </h2>
        <p className="bg-slate-700 w-full h-10"></p>
        <p className="bg-slate-700 w-full h-10"></p>
        <div className="card-actions justify-end">
          <p className="bg-slate-700 w-full h-10"></p>
        </div>
      </div>
    </div>
  );
}

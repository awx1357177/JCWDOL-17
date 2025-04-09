/** @format */
"use client";
import React, { useState } from "react";

export default function Home() {
  const [list, setList] = useState<Array<string>>([
    "todo 1",
    "todo 2",
    "todo 3",
  ]);
  const [val, setVal] = useState<string>("");

  const push = () => {
    // const element = document.getElementById("newList") as HTMLInputElement;
    // setList(list.concat(element.value));
    // setList([...list, element.value]);
    setList(list.concat(val));
  };

  const remove = (idx: number) => {
    // const tmp = [...list];
    // tmp.splice(idx, 1);
    // const tmp = list.filter((val, i) => i != idx);
    // setList(tmp);
    list.splice(idx, 1);
  };
  //"todo 4" => setList(list.concat("todo 4")) => setList(["todo 1","todo 2","todo 3", "todo 4"])
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-3">
      <div className="font-bold text-xl">TODO LIST</div>

      <div className="border-2 p-3 rounded-md max-w-56 w-full text-center flex justify-between">
        <input
          type="text"
          className="bg-black max-w-32 border-2 pl-2"
          id="newList"
          onChange={(e) => setVal(e.currentTarget.value)}
        />
        <button className="border-2 p-1 rounded-md" onClick={push}>
          Add
        </button>
      </div>

      <div className="border-2 p-3 rounded-md max-w-56 w-full text-center">
        {list.map((value, key) => (
          <div key={key} className="border-b flex justify-between py-2">
            <span>{value}</span>
            <button
              className="border-2 p-1 rounded-md"
              onClick={() => remove(key)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

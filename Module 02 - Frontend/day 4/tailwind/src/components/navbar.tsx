/** @format */

import React from "react";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">HOME</a>
      <a href="#">ABOUT</a>
      <a href="#">TEAM</a>
    </nav>
  );
}

export function Navbar2() {
  return (
    <nav
      className="text-red-500 bg-orange-300 font-bold text-md flex
      flex-col
      sm:flex-row
      sm:text-sm      
      gap-[5px]
     sticky top-0 p-[10px] font-20 "
    >
      <a href="#">HOME</a>
      <a href="#">ABOUT</a>
      <a href="#">TEAM</a>
    </nav>
  );
}

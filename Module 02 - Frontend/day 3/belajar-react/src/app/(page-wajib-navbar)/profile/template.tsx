/** @format */

import { Navbar } from "@/components/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <div>
      <Navbar />
      <h1>ini template</h1>
      {children}
    </div>
  );
}

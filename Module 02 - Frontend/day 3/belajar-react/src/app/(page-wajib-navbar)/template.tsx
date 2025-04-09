/** @format */

// import { Navbar } from "@/components/navbar";
import { Navbar } from "../../components/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

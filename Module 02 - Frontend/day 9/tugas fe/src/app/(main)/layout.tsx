/** @format */

import NavbarComponent from "@/components/navbar.component";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}

/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <center className=" flex justify-center items-center flex-col min-h-screen ">
      {children}
    </center>
  );
}

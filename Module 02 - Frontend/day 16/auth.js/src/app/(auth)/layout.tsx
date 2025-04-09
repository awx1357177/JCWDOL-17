/** @format */

import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
}

/** @format */
"use client";
import StoreProvider from "@/components/store.provider.component";
import React from "react";

type Props = { children: React.ReactNode };

export default function Template({ children }: Props) {
  return <StoreProvider>{children}</StoreProvider>;
}

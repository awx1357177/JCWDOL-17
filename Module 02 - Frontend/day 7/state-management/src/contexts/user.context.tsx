/** @format */

import { createContext, Dispatch, SetStateAction } from "react";

export interface IUserContext {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext | null>(null);

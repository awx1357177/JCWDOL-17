/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const reducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

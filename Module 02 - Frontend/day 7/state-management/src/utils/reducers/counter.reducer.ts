/** @format */
"use client";

export const actionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

interface ICountAction {
  type: string;
  payload: number;
}

interface ICountState {
  count: number;
}

export function reducer(state: ICountState, action: ICountAction) {
  switch (action.type) {
    case actionType.INCREMENT:
      return { count: state.count + action.payload };
    case actionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

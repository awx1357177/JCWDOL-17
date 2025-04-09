/** @format */

import { readFileSync, writeFileSync } from "fs";
import { IExpense } from "../interfaces/expense.interface";

export const getExpenses = () => {
  const data = JSON.parse(readFileSync(__dirname + "/../db.json", "utf-8"));
  return data as {
    expenses: IExpense[];
  };
};

export const writeData = (data: { expenses: IExpense[] }) => {
  writeFileSync(__dirname + "/../db.json", JSON.stringify(data));
};

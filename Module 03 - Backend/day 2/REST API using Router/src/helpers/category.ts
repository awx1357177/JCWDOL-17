/** @format */

import { writeFileSync } from "fs";
import { getData } from "./products";
import { ICategory } from "../interfaces/category.interface";

export const addCategory = (d: ICategory) => {
  const data = getData();
  const { categories } = data;
  const id = categories[categories.length - 1].id + 1;
  const { name } = d;
  const newData = { id, name };
  data.categories.push(newData);
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};

export const updateCategory = (d: ICategory, id: number) => {
  const data = getData();
  const { categories } = data;
  const idx = categories.findIndex((_) => _.id == id);
  if (idx == -1) throw new Error("category not found");
  const { name } = d;
  const editedData = {} as ICategory;
  if (name) editedData.name = name;

  data.categories[idx] = { ...data.categories[idx], ...editedData };
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};

export const deleteCategory = (id: number) => {
  const data = getData();
  const { categories } = data;
  const idx = categories.findIndex((_) => _.id == id);
  if (idx == -1) throw new Error("product not found");

  data.categories.splice(idx, 1);
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};

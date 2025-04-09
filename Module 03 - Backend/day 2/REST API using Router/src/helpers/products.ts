/** @format */

import { readFileSync, writeFileSync } from "fs";
import { IProduct } from "../interfaces/product.interface";
import { ICategory } from "../interfaces/category.interface";

export const getData = () => {
  const data = JSON.parse(readFileSync(__dirname + "/../../db.json", "utf8"));
  return data as { products: IProduct[]; categories: ICategory[] };
};

export const addProduct = (d: IProduct) => {
  const data = getData();
  const { products } = data;
  const id = products[products.length - 1].id + 1;
  const { productName, price, categoryId } = d;
  const newData = { id, productName, price, categoryId };
  data.products.push(newData);
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};

export const updateProduct = (d: IProduct, id: number) => {
  const data = getData();
  const { products } = data;
  const idx = products.findIndex((_) => _.id == id);
  if (idx == -1) throw new Error("product not found");
  const { productName, price, categoryId } = d;
  const editedData = {} as IProduct;
  if (productName) editedData.productName = productName;
  if (price) editedData.price = price;
  if (categoryId) editedData.categoryId = categoryId;

  data.products[idx] = { ...data.products[idx], ...editedData };
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};

export const deleteProduct = (id: number) => {
  const data = getData();
  const { products } = data;
  const idx = products.findIndex((_) => _.id == id);
  if (idx == -1) throw new Error("product not found");

  data.products.splice(idx, 1);
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};

/** @format */

import express, { Application, Request, Response } from "express";
import { products } from "./db.json";
const app: Application = express();
const PORT = 8000;

app.use(express.json()); //menangkap req.body

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Welcome to my API",
  });
});

app.get("/products", (req: Request, res: Response) => {
  const { product_name } = req.query;
  let data = [...products];
  if (product_name) {
    data = data.filter((_) =>
      _.product_name.toLowerCase().includes(String(product_name).toLowerCase())
    );
  }

  res.status(200).send({
    message: "fetching products",
    data,
  });
});

app.post("/products", (req: Request, res: Response) => {
  try {
    const id = products[products.length - 1].id + 1;
    const { product_name, price } = req.body;
    if (!product_name || !price) throw new Error("Product Name/Price required");
    const newProduct = {
      id,
      product_name,
      price,
    };
    products.push(newProduct);
    res.send({
      message: "new product has been added",
      data: newProduct,
    });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).send({
        message: error.message,
      });
  }
});

app.patch("/products/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { product_name, price } = req.body;
    const idx = products.findIndex((_) => _.id === Number(id));
    if (idx == -1) throw new Error("product not found");
    if (product_name) products[idx].product_name = product_name;
    if (price) products[idx].price = price;

    res.send({
      message: `product ${id} has been updated`,
    });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).send({
        message: error.message,
      });
  }
});

app.delete("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = products.findIndex((_) => _.id == Number(id));
  if (idx == -1)
    res.status(404).send({
      message: "product not found",
    });
  else {
    products.splice(idx, 1);
    res.status(200).send({
      message: `product id ${id} has been deleted`,
    });
  }
});

app.get("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data = products.find((_) => _.id == Number(id));
  if (!data)
    res.status(404).send({
      messsage: "product not found",
    });
  else
    res.status(200).send({
      message: "fetching single product",
      data,
    });
});

app.listen(PORT, () => {
  console.log("api is running on port", PORT);
});

//req.query
//products.filter
// buat sebuah request untuk filtering product berdasarkan product name

//method post -- body
//method patch -- body + req.params
//app.use ini apa

// route params
// query params

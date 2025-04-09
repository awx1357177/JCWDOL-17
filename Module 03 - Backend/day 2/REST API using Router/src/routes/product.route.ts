/** @format */

import { Request, Response, Router } from "express";
import {
  addProduct,
  deleteProduct,
  getData,
  updateProduct,
} from "../helpers/products";
import { IProduct } from "../interfaces/product.interface";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { products } = getData();
  res.send({
    message: "fetching products",
    data: products,
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { products } = getData();
  const data = products.find((_) => _.id == Number(id));
  res.send({
    message: "fetching product id " + id,
    data,
  });
});

router.post("/", (req: Request, res: Response) => {
  addProduct(req.body as IProduct);
  res.send({
    message: "new product has been added",
  });
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  updateProduct(req.body as IProduct, Number(id));
  res.send({
    message: "product has been updated",
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  deleteProduct(Number(id));
  res.send({
    message: "product has been deleted",
  });
});

export default router;

//crud product dan category

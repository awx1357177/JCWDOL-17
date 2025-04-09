/** @format */

import { Request, Response, Router } from "express";
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "../helpers/category";
import { ICategory } from "../interfaces/category.interface";
import { getData } from "../helpers/products";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { categories } = getData();
  res.send({
    message: "fetching categories",
    data: categories,
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { categories } = getData();
  const data = categories.find((_) => _.id == Number(id));
  res.send({
    message: "fetching category id " + id,
    data,
  });
});

router.post("/", (req: Request, res: Response) => {
  addCategory(req.body as ICategory);
  res.send({
    message: "new category has been added",
  });
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  updateCategory(req.body as ICategory, Number(id));
  res.send({
    message: "category has been updated",
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  deleteCategory(Number(id));
  res.send({
    message: "category has been deleted",
  });
});

export default router;

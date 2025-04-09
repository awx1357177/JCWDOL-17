/** @format */

import express, { Application, Request, Response } from "express";
import productRoute from "./routes/product.route";
import categoryRoute from "./routes/category.route";

const app: Application = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to my API");
});

app.use("/products", productRoute);
app.use("/categories", categoryRoute);

app.listen(PORT, () => console.log("api is running on port", PORT));

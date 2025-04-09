/** @format */

import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
import { resolve } from "path";
import { Pool } from "pg";
const app: Application = express();
config({ path: resolve(__dirname, ".env") });
const PORT = process.env.PORT || 8000;
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.connect((err, client, release) => {
  if (err) return console.log("Error client", err.stack);
  console.log("Success connection");
  release();
});

app.get("/employees", async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    let where = "WHERE ";
    if (name) where += `name like '%${name}%'`;
    else where = "";
    const result = await pool.query("SELECT * FROM employees " + where);
    console.log(result);

    res.send({
      message: "fetch employees",
      data: result.rows,
      total: result.rowCount,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log("api is running on port", PORT);
});

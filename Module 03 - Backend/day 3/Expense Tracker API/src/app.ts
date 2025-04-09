/** @format */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config";
import { expenseRouter } from "./routes/expense.route";
export class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private routes() {
    this.app.use("/expenses", expenseRouter());
  }

  private configure() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private handleError() {
    //not found handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send("Not found !");
    });

    //error handler
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send({
          message: err.message,
        });
      }
    );
  }

  start() {
    this.app.listen(PORT, () => {
      console.log("expense tracker app is running on PORT", PORT);
    });
  }
}

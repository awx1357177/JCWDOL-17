/** @format */
import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";
import { validate } from "../middlewares/expense.validator";
export const expenseRouter = () => {
  const router = Router();
  const expenseController = new ExpenseController();

  router.get("/", expenseController.getAll);
  router.get("/total-by-date-range", expenseController.getTotalByDateRange);
  router.get("/total-by-category", expenseController.getTotalByCategory);
  router.get("/:id", expenseController.getById);

  router.post("/", validate, expenseController.createExpense);

  router.patch("/:id", expenseController.updateExpense);

  router.delete("/:id", expenseController.deleteExpense);

  return router;
};

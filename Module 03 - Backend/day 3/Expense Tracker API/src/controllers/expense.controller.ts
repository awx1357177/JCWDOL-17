/** @format */

import { NextFunction, Request, Response } from "express";
import { getExpenses, writeData } from "../helpers/expense";
import { IExpense } from "../interfaces/expense.interface";

export class ExpenseController {
  getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { expenses } = getExpenses(); // get data from json
      res.send({
        message: "fetch expenses",
        data: expenses,
      });
    } catch (error) {
      next(error);
    }
  }
  getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { expenses } = getExpenses();
      const expense = expenses.find((_) => _.id == Number(req.params.id));
      if (!expense) throw new Error("expense tidak found");
      res.send({
        message: "fetch expenses",
        data: expense,
      });
    } catch (error) {
      next(error);
    }
  }
  createExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const data = getExpenses(); // get data from json
      const { newData } = req.body;

      newData.id = data.expenses[data.expenses.length - 1].id + 1;
      data.expenses.push(newData);
      writeData(data);
      res.send({
        message: "new data has been added",
        data: newData,
      });
    } catch (error) {
      next(error);
    }
  }
  updateExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const data = getExpenses();
      const idx = data.expenses.findIndex((_) => _.id == Number(req.params.id));
      if (idx == -1) throw new Error("expense not Found");
      data.expenses[idx] = { ...data.expenses[idx], ...req.body };
      writeData(data);
      res.send({
        message: "data has been updated",
        data: data.expenses[idx],
      });
    } catch (error) {
      next(error);
    }
  }
  deleteExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const data = getExpenses();
      const idx = data.expenses.findIndex((_) => _.id == Number(req.params.id));
      if (idx == -1) throw new Error("expense not Found");
      data.expenses.splice(idx, 1);
      writeData(data);
      res.send({
        message: "data has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }
  getTotalByDateRange(req: Request, res: Response, next: NextFunction) {
    try {
      const data = getExpenses();
      const { startDate, endDate, type } = req.query;
      if (!startDate || !endDate || !type) {
        throw new Error("start date,end date and type are required");
      }
      const total = data.expenses.reduce((sum: number, curr: IExpense) => {
        const date = new Date(curr.date);
        if (
          date >= new Date(startDate as string) &&
          date <= new Date(endDate as string) &&
          curr.type == type
        )
          return sum + curr.nominal;
        else return sum;
      }, 0);

      res.send({
        message: "total expense from date range",
        data: total,
      });
    } catch (error) {
      next(error);
    }
  }
  getTotalByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data = getExpenses();
      const { category } = req.query;
      const total = data.expenses.reduce(
        (sum: number, curr: IExpense) =>
          curr.category == category ? sum + curr.nominal : sum,
        0
      );

      res.send({
        message: "total expense from category " + category,
        data: total,
      });
    } catch (error) {
      next(error);
    }
  }
}

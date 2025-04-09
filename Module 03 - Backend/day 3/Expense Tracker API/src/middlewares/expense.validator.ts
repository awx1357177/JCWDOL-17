/** @format */

import { NextFunction, Request, Response } from "express";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, category, type, date, nominal } = req.body;

    if (!title || !category || !type || !date || !nominal)
      throw new Error("you need to complete the fields");

    req.body.newData = { title, category, type, date, nominal };

    next();
  } catch (error) {
    next(error);
  }
};

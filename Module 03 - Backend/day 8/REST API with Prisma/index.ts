/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
const app: Application = express();
const PORT = 8000;

const prisma = new PrismaClient();

app.use(express.json());
class ErrorHandler extends Error {
  code: number;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code || 500;
  }
}

app.get(
  "/branches",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const where: Prisma.BranchWhereInput = {};
      const { name, address, page, limit } = req.query;
      const take = Number(limit);
      const skip = (Number(page) - 1) * take;
      const config: { take?: number; skip?: number } = {};
      if (page != undefined) {
        config.take = take;
        config.skip = skip;
      }
      if (name)
        where.name = {
          contains: name as string,
        };
      if (address)
        where.address = {
          contains: address as string,
        };
      const data = await prisma.branch.findMany({
        select: {
          id: true,
          name: true,
          address: true,
        },
        where,
        ...config,
      });

      res.send({
        message: "fetch branches",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  "/branches/total",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.branch.aggregate({
        _count: {
          id: true,
        },
        _min: {
          id: true,
        },
        _max: {
          id: true,
        },
      });

      res.send({
        message: "get total branch",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data = await prisma.branch.findUnique({
        where: { id },
      }); // select * from branches where id =

      if (!data) throw new ErrorHandler("id not found", 404);
      res.send({
        message: "fetch branch",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.post(
  "/branches",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, address } = req.body;
      if (!name || !address)
        throw new ErrorHandler("name and address are required", 400);
      await prisma.branch.create({
        data: {
          name,
          address,
        },
      });
      res.send({
        message: "new branch has been created",
      });
    } catch (error) {
      next(error);
    }
  }
);

app.delete(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await prisma.branch.delete({
        where: { id },
      });
      res.send({
        message: `branch id ${id} has been deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.patch(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const { name, address } = req.body;
      const data: Prisma.BranchUpdateInput = {};
      if (name) data.name = name;
      if (address) data.address = address;

      await prisma.branch.update({
        data,
        where: {
          id,
        },
      });

      res.send({
        message: `branch id ${id} has been updated`,
      });
    } catch (error) {
      next(error);
    }
  }
);
app.get("/classes", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await prisma.class.findMany({
      select: {
        id: true,
        name: true,
        startDate: true,
        endDate: true,
        Branch: {
          select: {
            id: true,
            name: true,
            address: true,
          },
        },
      },
    });

    res.send({
      message: "fetch classes",
      data,
    });
  } catch (error) {
    next(error);
  }
});

app.get(
  "/students",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.student.findMany({
        select: {
          id: true,
          first_name: true,
          last_name: true,
          Address: {
            select: {
              address: true,
              city: true,
              postal_code: true,
            },
          },
        },
      });
      res.send({
        message: "fetching student data",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.post(
  "/students",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.$transaction(async (trx) => {
        const { first_name, last_name, address, city, postal_code } = req.body;

        const newStudent = await trx.student.create({
          data: {
            first_name,
            last_name,
          },
        });

        await trx.address.create({
          data: {
            id: newStudent.id,
            address,
            city,
            postal_code,
          },
        });
      });

      res.send({
        message: "new student has been added",
      });
    } catch (error) {
      next(error);
    }
  }
);

app.use(
  (error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(error.code || 500).send({
      message: error.message,
    });
  }
);

app.listen(PORT, () => {
  console.log("API is running on PORT", PORT);
});

import { Request, Response, NextFunction } from "express";

// General error-handling middleware
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res
    .status(res.statusCode || 500)
    .json({ message: err.message || err || "An unexpected error occurred" });
};
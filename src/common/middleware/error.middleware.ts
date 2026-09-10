import type { NextFunction, Request, Response } from 'express'
import { ErrorResponse } from '../utils/ErrorHandlers.js' 

export const globalErrorHandling = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = (err.statusCode as number) || 500
  res.status(status).json({
    status,
    err: { message: err.message, cause: err.cause },
    stack: err.stack,
  })
}

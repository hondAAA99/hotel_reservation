import type { NextFunction, Request, Response } from 'express'
import { ErrorUnAuthorizedRequest } from '../utils/ErrorHandlers.js'

export function preAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.headers['authorization'])
    ErrorUnAuthorizedRequest('please signUp or login');

  next()
}

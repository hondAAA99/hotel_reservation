import type { NextFunction, Request, Response } from 'express'
import { ErrorForbidden } from '../utils/ErrorHandlers.js'

export function authorization(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.map((role: string) => role == req.user?.role)) {
      return ErrorForbidden()
    }

    next()
  }
}

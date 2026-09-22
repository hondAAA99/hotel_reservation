import zod from 'zod'
import type { NextFunction, Request, Response } from 'express'
import { ErrorBadRequest } from '../utils/ErrorHandlers.js'

type reqType = keyof Request // body, params , etc.
type SchemaType = Partial<Record<reqType, zod.ZodSchema>>

export function validation(schema: SchemaType) {
  return async (req: Request, res: Response, next: NextFunction) => {
    let errArr = []

    for (let key of Object.keys(schema) as reqType[]) {
      if (!key) continue
      const { success, error } = schema[key]?.safeParse(req[key])!

      if (!success) {
        errArr.push({
          name: error.name,
          message: error.message,
        })
      }
    }

    if (errArr.length) return ErrorBadRequest('Bad request exception', errArr)

    next()
  }
}

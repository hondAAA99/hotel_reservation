import type { Request, Response, NextFunction } from 'express'

export class ErrorResponse extends Error {
  public statusCode: number
  public message: any
  constructor({
    message,
    statusCode,
    cause,
  }: {
    message: string
    statusCode: number
    cause?: any
  }) {
    super(message)
    ;((this.message = message), (this.statusCode = statusCode))
    this.cause = cause
  }
}

export const ErrorUnAuthorizedRequest = (
  message: string = 'you are not authorized to access this page',
  cause?: any,
) => {
  throw new ErrorResponse({ message, statusCode: 401, cause })
}

export const ErrorRedirect = (message: string = 'redirection', cause?: any) => {
  throw new ErrorResponse({ message, statusCode: 301, cause })
}

export const ErrorForbidden = (
  message: string = 'forbidden response due to error when processing the request data',
  cause?: any,
) => {
  throw new ErrorResponse({ message, statusCode: 403, cause })
}
export const ErrorNotFound = (
  message: string = 'failed to find the data',
  cause?: any,
) => {
  throw new ErrorResponse({ message, statusCode: 404, cause })
}
export const ErrorConflict = (message: string = 'conflict', cause?: any) => {
  throw new ErrorResponse({ message, statusCode: 402, cause })
}

export const ErrorInternalServerError = (message: any, cause?: any) => {
  throw new ErrorResponse({ message, statusCode: 500, cause })
}
export const ErrorBadRequest = (
  message: any = 'Bad request exception ',
  cause?: any,
) => {
  throw new ErrorResponse({ message, statusCode: 400, cause })
}

export const SuccessResponse = ({
  res,
  statusCode = 200,
  data,
}: {
  res: Response
  statusCode?: number
  data: any
}) => {
  return res.status(statusCode).json(data)
}

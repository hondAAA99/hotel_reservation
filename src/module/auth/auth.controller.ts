import { Router, type NextFunction, type Request, type Response } from 'express'
import authService from './auth.service.js'
import { SuccessResponse } from '../../common/utils/ErrorHandlers.js'

const authRouter = Router()
const Service = authService

authRouter.post(
  '/signup',
  // validation(signUpSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.signUp(req.body),
      statusCode: 201,
    })
  },
)

authRouter.post(
  '/signIn',
  // validation(signInSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Service.signIn(req.body)
      return SuccessResponse({
        res,
        data: result,
        statusCode: 200,
      })
    } catch (error) {
      next(error)
    }
  },
)

export default authRouter

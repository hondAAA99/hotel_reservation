import { Router, type NextFunction, type Request, type Response } from 'express'
import authService from './auth.service.js'

const authRouter = Router()
const Service = authService

authRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  return 
})
authRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  return
})

export default authRouter

import { Router, type NextFunction, type Request, type Response } from 'express'
import roomServices from './room.service.js'
import { SuccessResponse } from '../../common/utils/ErrorHandlers.js'
import { validation } from '../../common/middleware/validation.js'
import {
  addRoomSchema,
  addRoomTypeSchema,
  confirmBookingSchema,
  searchRoomSchema,
} from './room.validation.schema.js'
import { authenticate } from '../../common/middleware/authentication.middleware.js'
import { authorization } from '../../common/middleware/authorization.js'
import { roleEnum } from '../../common/enum/user.enum.js'
import { preAuthenticate } from '../../common/middleware/preAuthenticate.middleware.js'

const roomsRouter = Router()
const Service = roomServices

roomsRouter.get(
  '/types',
  preAuthenticate,
  authenticate,
  authorization([roleEnum.admin]),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.getRoomTypes(),
      statusCode: 200,
    })
  },
)

roomsRouter.post(
  '/types',
  preAuthenticate,
  validation(addRoomTypeSchema),
  authenticate,
  authorization([roleEnum.admin]),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await Service.addRoomType(req.body)
    return SuccessResponse({
      res,
      data: result,
      statusCode: 201,
    })
  },
)

roomsRouter.get('/all', async (req, res, next) => {
  return SuccessResponse({
    res,
    data: await Service.getAllRooms(),
    statusCode: 201,
  })
})

roomsRouter.post(
  '/',
  preAuthenticate,
  validation(addRoomSchema),
  authenticate,
  authorization([roleEnum.admin]),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.addRoom(req.body),
      statusCode: 201,
    })
  },
)

roomsRouter.get(
  '/',
  validation(searchRoomSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.searchAvailableRooms(req.query as any),
      statusCode: 200,
    })
  },
)

roomsRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.getRoomById(req.params.id as string),
      statusCode: 200,
    })
  },
)
roomsRouter.post(
  '/confirm',
  preAuthenticate,
  authenticate,
  validation(confirmBookingSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.Booking(req.body, req.user!),
      statusCode: 201,
    })
  },
)
roomsRouter.get(
  '/confirm-stripe/:id',
  preAuthenticate,
  authenticate,
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.checkout(req.params.id as string, req.user!),
      statusCode: 200,
    })
  },
)

export default roomsRouter

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
import type { searchRoomSchemaDTO } from './room.dto.js'

const roomsRouter = Router()
const Service = roomServices

roomsRouter.get(
  '/types',
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
  validation(addRoomTypeSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await Service.addRoomType(req.body)
    return SuccessResponse({
      res,
      data: result,
      statusCode: 201,
    })
  },
)

roomsRouter.post(
  '/',
  validation(addRoomSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.addRoom(req.body),
      statusCode: 201,
    })
  },
)

roomsRouter.post(
  '/confirm',
  validation(confirmBookingSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    return SuccessResponse({
      res,
      data: await Service.confirmBooking(req.body),
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

export default roomsRouter

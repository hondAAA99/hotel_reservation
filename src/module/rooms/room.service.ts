import { log } from 'node:console'
import { reservationStatus } from '../../common/enum/reservation.base.enum.js'
import { paymentService } from '../../common/service/payment.service.js'
import {
  ErrorBadRequest,
  ErrorForbidden,
  ErrorInternalServerError,
  ErrorNotFound,
} from '../../common/utils/ErrorHandlers.js'
import type { HUDoc } from '../../database/model/user.model.js'
import reservationRepo from '../../database/repo/reservation.repo.js'
import roomRepo from '../../database/repo/room.repo.js'
import roomTypesRepo from '../../database/repo/roomTypes.repo.js'
import userRepo from '../../database/repo/user.repo.js'
import type {
  addRoomSchemaDTO,
  addRoomTypeSchemaDTO,
  confirmBookingSchemaDTO,
  searchRoomSchemaDTO,
} from './room.dto.js'

class roomServices {
  constructor(
    private readonly _userRepo = userRepo,
    private readonly _roomRepo = roomRepo,
    private readonly _roomTypesRepo = roomTypesRepo,
    private readonly _reservationRepo = reservationRepo,
    private readonly _payment = new paymentService(),
  ) {}

  async getRoomTypes() {
    return await this._roomTypesRepo.findAll().catch(err => {
      return ErrorInternalServerError('error in finding room types')
    })
  }

  async addRoomType(body: addRoomTypeSchemaDTO) {
    const { name, roomAdvantages } = body

    try {
      await this._roomTypesRepo.create({
        name,
        roomAdvantages,
      })
      return 'room type created successfully'
    } catch (error: any) {
      return ErrorInternalServerError('error in adding room type')
    }
  }

  async addRoom(body: addRoomSchemaDTO) {
    const { roomNumber, roomType, price, roomCapacity } = body

    try {
      const getRoomType = await this._roomTypesRepo.findOne({
        filter: { name: roomType },
      })

      if (!getRoomType) return ErrorInternalServerError('cannot find room type')

      await this._roomRepo.create({
        roomNumber,
        roomType: getRoomType._id,
        price,
        roomCapacity,
      })
      return 'room created successfully'
    } catch (error: any) {
      return ErrorInternalServerError(error.message)
    }
  }

  async searchAvailableRooms(query: searchRoomSchemaDTO) {
    const { guests, checkIn, checkout, page } = query

    return await this._roomRepo.paginate({
      page,
      search: {
        $or: [
          {
            available: true,
          },
          {
            available: false,
            reservationTo: { $lt: checkIn },
          },
        ],
        roomCapacity: { $gte: guests },
      },
      options: {
        populate: [{ path: 'roomType', select: 'roomAdvantages name -_id' }],
      },
    })
  }

  async Booking(body: confirmBookingSchemaDTO, user: HUDoc) {
    const {
      roomNumber,
      roomType,
      checkIn,
      checkout,
      guests,
      fullName,
      email,
      phone,
      specialRequests,
    } = body

    if (checkout <= checkIn) {
      throw ErrorBadRequest('checkout must be after checkin')
    }

    const nights = Math.max(
      1,
      Math.round(
        (new Date(checkout).getTime() - new Date(checkIn).getTime()) / 86400000,
      ),
    )

    const room = await this._roomRepo.findOne({
      filter: { roomNumber, available: true },
      options: {
        populate: [{ path: 'roomType', select: 'name roomAdvantages' }],
      },
    })

    if (!room) {
      throw ErrorNotFound('room is not available for booking')
    }

    const roomTypeDocument = await this._roomTypesRepo.findOne({
      filter: { name: roomType },
    })

    if (!roomTypeDocument) {
      throw ErrorNotFound('room type does not exist')
    }

    const nightPrice = Number(room.price)
    const discount = nights >= 3 ? 84 : 0
    const price = nightPrice * nights
    const total = Math.max(price - discount, 0)

    await this._roomRepo.findByIdAndUpdate({
      id: room._id,
      update: {
        available: false,
        reservationFrom: checkIn,
        reservationTo: checkout,
      },
    })

    const { id } = await this._reservationRepo.create({
      discount,
      guestId: user._id,
      guests,
      nightPrice,
      nights,
      roomId: room._id,
      total,
    })

    return {
      message: 'booking confirmed successfully',
      stay: {
        roomNumber,
        roomType,
        checkIn,
        checkout,
        guests,
      },
      guest: {
        fullName,
        email,
        phone,
        specialRequests,
      },
      priceSummary: {
        roomName: roomTypeDocument.name,
        nights,
        nightPrice,
        discount,
        total,
      },
      reservationID: id,
    }
  }

  async checkout(id: string, userReq: HUDoc) {
    const reservation = await this._reservationRepo.findOne({
      filter: { _id: id, paid: reservationStatus.pending },
    })

    if (!reservation) {
      throw ErrorNotFound('reservation not found')
    }

    const user = await this._userRepo.findById({
      id: reservation.guestId,
    })
    if (!user) {
      throw ErrorNotFound('user not found')
    }

    const session = await this._payment.checkout({
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Hotel Booking',
            },
            unit_amount: Math.round(reservation.total * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    })

    return {
      url: session.url,
    }
  }

  async getAllRooms() {
    return await this._roomRepo.findAll({ filter: {} })
  }

  async getRoomById(id: string) {
    return await this._roomRepo.findById({
      id,
    })
  }
}

export default new roomServices()

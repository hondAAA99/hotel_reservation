import {
  ErrorBadRequest,
  ErrorInternalServerError,
  ErrorNotFound,
} from '../../common/utils/ErrorHandlers.js'
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
  ) {}

  async getRoomTypes() {
    return await this._roomTypesRepo.findAll().catch(err => {
      return ErrorInternalServerError('error in finding room types')
    })
  }

  async addRoomType(body: addRoomTypeSchemaDTO) {
    const { name, advantages } = body

    try {
      await this._roomTypesRepo.create({
        name,
        roomAdvantages: advantages,
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

  async confirmBooking(body: confirmBookingSchemaDTO) {
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
      Math.round((checkout.getTime() - checkIn.getTime()) / 86400000),
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
    }
  }

  async searchAvailableRooms(query: searchRoomSchemaDTO) {
    const { guests, checkIn, checkout, page } = query

    return await this._roomRepo.paginate({
      page,
      search: {
        available: true,
        roomCapacity: guests,
      },
      options: {
        populate: [{ path: 'roomType', select: 'roomAdvantages name -_id' }],
      },
    })
  }
}

export default new roomServices()

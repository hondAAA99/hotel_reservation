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
        roomCapacity: { $gte: guests ? guests : 1 },
      },
      options: {
        populate: 'roomType',
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

    // --------------------------------------------------
    // 1. Validate dates
    // --------------------------------------------------

    const checkInDate = new Date(checkIn)
    const checkoutDate = new Date(checkout)

    if (checkoutDate <= checkInDate) {
      throw ErrorBadRequest('checkout must be after check in')
    }

    const nights = Math.max(
      1,
      Math.round((checkoutDate.getTime() - checkInDate.getTime()) / 86400000),
    )

    // --------------------------------------------------
    // 2. Find available room
    // --------------------------------------------------

    const room = await this._roomRepo.findOne({
      filter: {
        $or: [
          {
            roomNumber,
            available: true,
          },
          {
            roomNumber,
            available: false,
            reservationTo: {
              $lt: checkInDate,
            },
          },
        ],
      },

      options: {
        populate: [
          {
            path: 'roomType',
            select: 'name roomAdvantages',
          },
        ],
      },
    })

    if (!room) {
      throw ErrorNotFound('room is not available for booking')
    }

    // --------------------------------------------------
    // 3. Validate room type
    // --------------------------------------------------

    const roomTypeDocument = await this._roomTypesRepo.findById({
      id: roomType,
    })

    if (!roomTypeDocument) {
      throw ErrorNotFound('room type does not exist')
    }

    // --------------------------------------------------
    // 4. Calculate price
    // --------------------------------------------------

    const nightPrice = Number(room.price)

    const discount = nights >= 3 ? 84 : 0

    const price = nightPrice * nights

    const total = Math.max(price - discount, 0)

    // --------------------------------------------------
    // 5. Reserve/lock the room
    // --------------------------------------------------

    await this._roomRepo.findByIdAndUpdate({
      id: room._id,

      update: {
        available: false,
        reservationFrom: checkInDate,
        reservationTo: checkoutDate,
      },
    })

    try {
      // ------------------------------------------------
      // 6. Create reservation
      // ------------------------------------------------

      const { id: reservationID } = await this._reservationRepo.create({
        discount,
        guestId: user._id,
        guests,
        nightPrice,
        nights,
        roomId: room._id,
        total,

        // Make sure your schema supports this.
        paid: reservationStatus.pending,
      })

      // ------------------------------------------------
      // 7. Create Stripe Checkout Session
      // ------------------------------------------------

      const frontendURL = process.env.FRONTEND_URL

      if (!frontendURL) {
        throw new Error('FRONTEND_URL is not configured')
      }

      const session = await this._payment.checkout({
        customer_email: email,

        line_items: [
          {
            price_data: {
              currency: 'usd',

              product_data: {
                name: `${roomTypeDocument.name} - Room ${roomNumber}`,
              },

              unit_amount: Math.round(total * 100),
            },

            quantity: 1,
          },
        ],

        mode: 'payment',

        success_url:
          `${frontendURL}/booking/success` +
          `?session_id={CHECKOUT_SESSION_ID}`,

        cancel_url:
          `${frontendURL}/booking/cancel` + `?reservation_id=${reservationID}`,

        metadata: {
          reservationID: reservationID.toString(),
          roomID: room._id.toString(),
          userID: user._id.toString(),
        },
      })

      if (!session.url) {
        throw new Error('Stripe checkout URL was not generated')
      }

      // ------------------------------------------------
      // 8. Return everything frontend needs
      // ------------------------------------------------

      return {
        message: 'booking created successfully',

        reservationID,

        payment: {
          status: reservationStatus.pending,
          url: session.url,
        },

        stay: {
          roomNumber,
          roomType,
          checkIn: checkInDate,
          checkout: checkoutDate,
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
    } catch (error) {
      // ------------------------------------------------
      // IMPORTANT:
      // If reservation/Stripe creation fails, release room
      // ------------------------------------------------

      await this._roomRepo.findByIdAndUpdate({
        id: room._id,

        update: {
          available: true,
          reservationFrom: null,
          reservationTo: null,
        },
      })

      throw error
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
    return await this._roomRepo.findAll({
      filter: {},
      options: {
        populate: 'roomType',
      },
    })
  }

  async getRoomById(id: string) {
    return await this._roomRepo.findById({
      id,
      options: {
        populate: 'roomType',
      },
    })
  }
}

export default new roomServices()

import z from 'zod'
import { genRules } from '../../common/utils/validation.generalRules.js'
import { roomTypeEnum } from '../../common/enum/room.enum.js'

export const addRoomTypeSchema = {
  body: z.object({
    name: genRules.userName,
    advantages: genRules.advantages,
  }),
}

export const addRoomSchema = {
  body: z.object({
    roomNumber: z.number(),
    roomType: z.enum(roomTypeEnum),
    price: z.number(),
    roomCapacity: z.number(),
  }),
}

export const confirmBookingSchema = {
  body: z.object({
    roomNumber: z.number().int().positive(),
    roomType: z.enum(roomTypeEnum),
    checkIn: z.coerce.date(),
    checkout: z.coerce.date(),
    guests: z.number().int().positive(),
    fullName: z.string().min(2),
    email: z.email(),
    phone: z.string().min(8),
    specialRequests: z.string().optional().default(''),
  }),
}

export const searchRoomSchema = {
  query: z
    .object({
      roomType: z.enum(roomTypeEnum),
      guests: z.number().transform(val => (val ? Number(val) : 1)),
      checkIn: z.date(),
      checkout: z.date(),
      page: z.number().transform(val => (val ? Number(val) : 0)),
    })
    .superRefine((data, ctx) => {
      if (data.checkIn.getMilliseconds > data.checkout.getMilliseconds) {
        ctx.addIssue('invalid date params')
      }
    }),
}

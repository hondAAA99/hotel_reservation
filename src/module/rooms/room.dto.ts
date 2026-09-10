import type z from 'zod'
import type {
  addRoomSchema,
  addRoomTypeSchema,
  confirmBookingSchema,
  searchRoomSchema,
} from './room.validation.schema.js'

export type addRoomTypeSchemaDTO = z.infer<typeof addRoomTypeSchema.body>
export type addRoomSchemaDTO = z.infer<typeof addRoomSchema.body>
export type confirmBookingSchemaDTO = z.infer<typeof confirmBookingSchema.body>
export type searchRoomSchemaDTO = z.infer<typeof searchRoomSchema.query>

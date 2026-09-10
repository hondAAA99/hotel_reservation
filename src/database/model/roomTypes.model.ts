import mongoose, { Schema, type HydratedDocument } from 'mongoose'
import type { roomAdvantagesType } from '../../common/enum/room.enum.js'

export interface IRoomTypes {
  name: string
  roomAdvantages: roomAdvantagesType
}

const roomTypeSchema = new Schema<IRoomTypes>(
  {
    roomAdvantages: {
      type: {
        beds: { type: String, required: true },
        view: { type: String, required: true },
        area: { type: String, required: true },
        breakfast: { type: String, required: true },
        livingRoom: { type: String, required: false },
      },
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
  },
)

const RoomTypesModel =
  mongoose.models.roomstypes || mongoose.model('roomstypes', roomTypeSchema)

export type HRDoc = HydratedDocument<IRoomTypes>

export default RoomTypesModel

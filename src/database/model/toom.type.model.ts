import mongoose, { Schema, Types } from 'mongoose'
import { roomAdvantages } from '../../common/enum/roomType.enum.js'

const roomAdvantagesSchema = new Schema({
  classA: [
    roomAdvantages.capacity[2],
    roomAdvantages.freeBreakFast,
    roomAdvantages.freeWifi,
    roomAdvantages.smoking[1],
  ],
  classB: [
    roomAdvantages.capacity[1],
    roomAdvantages.freeWifi,
    roomAdvantages.smoking[0],
  ],
  classC: [
    roomAdvantages.capacity[0],
    roomAdvantages.freeBreakFast,
    roomAdvantages.smoking[1],
  ],
})

const roomTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    roomType: { type: String, required: true },
    roomAdvantages: {
      type: roomAdvantagesSchema,
      required: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
  },
)
const userModel =
  mongoose.models.users || mongoose.model('rooms', roomTypeSchema)

export default userModel

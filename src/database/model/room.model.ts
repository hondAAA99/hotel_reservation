import mongoose, { Schema, Types } from 'mongoose'
import { hashAndEncryptHook } from '../globalHooks.js'

const roomSchema = new Schema(
  {
    roomNumber: { type: String, required: true },
    roomType: { type: String, required: true },
    reserveFor: { type: Types.ObjectId, ref: 'users', required: true },
    reservationFrom: { type: Date, required: true },
    reservationTo: { type: Date, required: true },
    price: { type: Number, required: true },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
  },
)
const userModel = mongoose.models.users || mongoose.model('rooms', roomSchema)

export default userModel

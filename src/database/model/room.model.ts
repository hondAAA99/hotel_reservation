import mongoose, { Schema, Types } from 'mongoose'
export interface IRoom {
  roomNumber: number
  roomType: Types.ObjectId
  reservoirId: Types.ObjectId
  reservationFrom: Date
  reservationTo: Date
  price: Number
  roomCapacity: Number
  available: boolean
}

const roomSchema = new Schema<IRoom>(
  {
    roomNumber: { type: Number, required: true, unique: true },
    roomType: { type: Types.ObjectId, required: true, ref: 'roomstypes' },
    reservoirId: { type: Types.ObjectId, ref: 'users', default: null },
    reservationFrom: { type: Date, default: null },
    reservationTo: { type: Date, default: null },
    price: { type: Number, required: true },
    roomCapacity: { type: Number, default: 1 },
    available: { type: Boolean, default: true },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
  },
)
const RoomModel = mongoose.models.Rooms || mongoose.model('rooms', roomSchema)

export default RoomModel

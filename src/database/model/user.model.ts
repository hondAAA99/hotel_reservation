import mongoose, { Schema, type HydratedDocument } from 'mongoose'
import { hashAndEncryptHook } from '../globalHooks.js'
import { roleEnum } from '../../common/enum/user.enum.js'
export interface IUser {
  userName: string
  role: string
  email: string
  password: string
  phoneNumber?: string
  DateOfBirth?: Date
  nationality?: string
}
const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: roleEnum,
      default: roleEnum.user,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    DateOfBirth: { type: Date },
    nationality: { type: String },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
  },
)
hashAndEncryptHook(userSchema)
const userModel = mongoose.models.users || mongoose.model('users', userSchema)
export type HUDoc = HydratedDocument<IUser>

export default userModel

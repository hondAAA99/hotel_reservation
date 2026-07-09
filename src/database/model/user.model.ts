import mongoose, { Schema } from 'mongoose'
import { hashAndEncryptHook } from '../globalHooks.js'

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    nationality: { type: Date, required: true },
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

export default userModel

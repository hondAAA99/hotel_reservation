import mongoose, { Schema } from 'mongoose';
import { hashAndEncryptHook } from '../globalHooks.js';
import { roleEnum } from '../../common/enum/user.enum.js';
const userSchema = new Schema({
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
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
});
hashAndEncryptHook(userSchema);
const userModel = mongoose.models.users || mongoose.model('users', userSchema);
export default userModel;
//# sourceMappingURL=user.model.js.map
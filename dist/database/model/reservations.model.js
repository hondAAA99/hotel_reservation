import mongoose, { Schema, Types } from 'mongoose';
import { reservationStatus } from '../../common/enum/reservation.base.enum.js';
const reservationSchema = new Schema({
    guestId: { type: Types.ObjectId, ref: 'users', default: null },
    roomId: { type: Types.ObjectId, ref: 'users', default: null },
    total: { type: Number, required: true },
    nights: { type: Number, required: true },
    nightPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    guests: { type: Number, required: true },
    paid: {
        type: String,
        enum: reservationStatus,
        default: reservationStatus.pending,
    }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
});
const ReservationModel = mongoose.models.Rooms || mongoose.model('reservation', reservationSchema);
export default ReservationModel;
//# sourceMappingURL=reservations.model.js.map
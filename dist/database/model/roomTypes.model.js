import mongoose, { Schema } from 'mongoose';
const roomTypeSchema = new Schema({
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
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: true,
    strictQuery: true,
});
const RoomTypesModel = mongoose.models.roomstypes || mongoose.model('roomstypes', roomTypeSchema);
export default RoomTypesModel;
//# sourceMappingURL=roomTypes.model.js.map
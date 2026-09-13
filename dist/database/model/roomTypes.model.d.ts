import mongoose, { type HydratedDocument } from 'mongoose';
import type { roomAdvantagesType } from '../../common/enum/room.enum.js';
export interface IRoomTypes {
    name: string;
    roomAdvantages: roomAdvantagesType;
}
declare const RoomTypesModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IRoomTypes, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IRoomTypes, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IRoomTypes & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<IRoomTypes, mongoose.Model<IRoomTypes, any, any, any, any, any, IRoomTypes>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IRoomTypes, mongoose.Document<unknown, {}, IRoomTypes, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IRoomTypes & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: mongoose.SchemaDefinitionProperty<string, IRoomTypes, mongoose.Document<unknown, {}, IRoomTypes, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoomTypes & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    roomAdvantages?: mongoose.SchemaDefinitionProperty<roomAdvantagesType, IRoomTypes, mongoose.Document<unknown, {}, IRoomTypes, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoomTypes & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
}, IRoomTypes>, IRoomTypes>;
export type HRDoc = HydratedDocument<IRoomTypes>;
export default RoomTypesModel;
//# sourceMappingURL=roomTypes.model.d.ts.map
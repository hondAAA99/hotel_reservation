import mongoose, { Types } from 'mongoose';
export interface IRoom {
    roomNumber: number;
    roomType: Types.ObjectId;
    reservoirId: Types.ObjectId;
    reservationFrom: Date;
    reservationTo: Date;
    price: Number;
    roomCapacity: Number;
    available: boolean;
}
declare const RoomModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IRoom, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IRoom, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<IRoom, mongoose.Model<IRoom, any, any, any, any, any, IRoom>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IRoom, mongoose.Document<unknown, {}, IRoom, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    roomNumber?: mongoose.SchemaDefinitionProperty<number, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    roomType?: mongoose.SchemaDefinitionProperty<Types.ObjectId, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    reservoirId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    reservationFrom?: mongoose.SchemaDefinitionProperty<Date, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    reservationTo?: mongoose.SchemaDefinitionProperty<Date, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    price?: mongoose.SchemaDefinitionProperty<Number, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    roomCapacity?: mongoose.SchemaDefinitionProperty<Number, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    available?: mongoose.SchemaDefinitionProperty<boolean, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
}, IRoom>, IRoom>;
export default RoomModel;
//# sourceMappingURL=room.model.d.ts.map
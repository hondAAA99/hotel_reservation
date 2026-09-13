import mongoose, { Types } from 'mongoose';
export interface IReservation {
    guestId: Types.ObjectId;
    roomId: Types.ObjectId;
    nights: number;
    nightPrice: number;
    total: number;
    guests: number;
    discount: number;
    paid: string;
}
declare const ReservationModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IReservation, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IReservation, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<IReservation, mongoose.Model<IReservation, any, any, any, any, any, IReservation>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IReservation, mongoose.Document<unknown, {}, IReservation, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    guestId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    roomId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    nights?: mongoose.SchemaDefinitionProperty<number, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    nightPrice?: mongoose.SchemaDefinitionProperty<number, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    total?: mongoose.SchemaDefinitionProperty<number, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    guests?: mongoose.SchemaDefinitionProperty<number, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    discount?: mongoose.SchemaDefinitionProperty<number, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
    paid?: mongoose.SchemaDefinitionProperty<string, IReservation, mongoose.Document<unknown, {}, IReservation, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IReservation & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>>;
}, IReservation>, IReservation>;
export default ReservationModel;
//# sourceMappingURL=reservations.model.d.ts.map
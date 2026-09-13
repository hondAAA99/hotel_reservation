import BaseRepo from './base.repo.js';
import type { IReservation } from '../model/reservations.model.js';
declare class reservationRepo extends BaseRepo<IReservation> {
    readonly _model: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<IReservation, {}, {}, {
        id: string;
    }, import("mongoose").Document<unknown, {}, IReservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>, import("mongoose").Schema<IReservation, import("mongoose").Model<IReservation, any, any, any, any, any, IReservation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>, {
        guestId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        roomId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        nights?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        nightPrice?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        total?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        guests?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        discount?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        paid?: import("mongoose").SchemaDefinitionProperty<string, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IReservation>, IReservation>;
    constructor(_model?: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<IReservation, {}, {}, {
        id: string;
    }, import("mongoose").Document<unknown, {}, IReservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>, import("mongoose").Schema<IReservation, import("mongoose").Model<IReservation, any, any, any, any, any, IReservation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>, {
        guestId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        roomId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        nights?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        nightPrice?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        total?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        guests?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        discount?: import("mongoose").SchemaDefinitionProperty<number, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
        paid?: import("mongoose").SchemaDefinitionProperty<string, IReservation, import("mongoose").Document<unknown, {}, IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IReservation>, IReservation>);
}
declare const _default: reservationRepo;
export default _default;
//# sourceMappingURL=reservation.repo.d.ts.map
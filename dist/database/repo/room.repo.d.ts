import mongoose from 'mongoose';
import type { IRoom } from '../model/room.model.js';
import BaseRepo from './base.repo.js';
declare class roomRepo extends BaseRepo<IRoom> {
    readonly _model: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IRoom, {}, {}, {
        id: string;
    }, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, mongoose.Schema<IRoom, mongoose.Model<IRoom, any, any, any, any, any, IRoom>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, {
        roomNumber?: mongoose.SchemaDefinitionProperty<number, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        roomType?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        reservoirId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        reservationFrom?: mongoose.SchemaDefinitionProperty<Date, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        reservationTo?: mongoose.SchemaDefinitionProperty<Date, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        price?: mongoose.SchemaDefinitionProperty<Number, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        roomCapacity?: mongoose.SchemaDefinitionProperty<Number, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        available?: mongoose.SchemaDefinitionProperty<boolean, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IRoom>, IRoom>;
    constructor(_model?: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IRoom, {}, {}, {
        id: string;
    }, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, mongoose.Schema<IRoom, mongoose.Model<IRoom, any, any, any, any, any, IRoom>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IRoom, mongoose.Document<unknown, {}, IRoom, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, {
        roomNumber?: mongoose.SchemaDefinitionProperty<number, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        roomType?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        reservoirId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        reservationFrom?: mongoose.SchemaDefinitionProperty<Date, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        reservationTo?: mongoose.SchemaDefinitionProperty<Date, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        price?: mongoose.SchemaDefinitionProperty<Number, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        roomCapacity?: mongoose.SchemaDefinitionProperty<Number, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        available?: mongoose.SchemaDefinitionProperty<boolean, IRoom, mongoose.Document<unknown, {}, IRoom, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoom & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IRoom>, IRoom>);
}
declare const _default: roomRepo;
export default _default;
//# sourceMappingURL=room.repo.d.ts.map
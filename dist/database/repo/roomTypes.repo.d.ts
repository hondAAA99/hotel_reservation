import mongoose from 'mongoose';
import BaseRepo from './base.repo.js';
import type { IRoomTypes } from '../model/roomTypes.model.js';
declare class roomTypesRepo extends BaseRepo<IRoomTypes> {
    readonly _model: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IRoomTypes, {}, {}, {
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
        roomAdvantages?: mongoose.SchemaDefinitionProperty<import("../../common/enum/room.enum.js").roomAdvantagesType, IRoomTypes, mongoose.Document<unknown, {}, IRoomTypes, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoomTypes & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IRoomTypes>, IRoomTypes>;
    constructor(_model?: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IRoomTypes, {}, {}, {
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
        roomAdvantages?: mongoose.SchemaDefinitionProperty<import("../../common/enum/room.enum.js").roomAdvantagesType, IRoomTypes, mongoose.Document<unknown, {}, IRoomTypes, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IRoomTypes & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IRoomTypes>, IRoomTypes>);
}
declare const _default: roomTypesRepo;
export default _default;
//# sourceMappingURL=roomTypes.repo.d.ts.map
import mongoose from 'mongoose';
import type { IUser } from '../model/user.model.js';
import BaseRepo from './base.repo.js';
declare class userRepo extends BaseRepo<IUser> {
    readonly _model: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IUser, {}, {}, {
        id: string;
    }, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, mongoose.Schema<IUser, mongoose.Model<IUser, any, any, any, any, any, IUser>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUser, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, {
        userName?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        role?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        email?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        password?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        phoneNumber?: mongoose.SchemaDefinitionProperty<string | undefined, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        DateOfBirth?: mongoose.SchemaDefinitionProperty<Date | undefined, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        nationality?: mongoose.SchemaDefinitionProperty<string | undefined, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IUser>, IUser>;
    constructor(_model?: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IUser, {}, {}, {
        id: string;
    }, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, mongoose.Schema<IUser, mongoose.Model<IUser, any, any, any, any, any, IUser>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUser, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>, {
        userName?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        role?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        email?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        password?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        phoneNumber?: mongoose.SchemaDefinitionProperty<string | undefined, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        DateOfBirth?: mongoose.SchemaDefinitionProperty<Date | undefined, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
        nationality?: mongoose.SchemaDefinitionProperty<string | undefined, IUser, mongoose.Document<unknown, {}, IUser, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<IUser & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>>;
    }, IUser>, IUser>);
}
declare const _default: userRepo;
export default _default;
//# sourceMappingURL=user.repo.d.ts.map
import type { QueryOptions, WithLevel1NestedPaths, UpdateQuery, ProjectionType, HydratedDocument, QueryFilter, Model, Schema } from 'mongoose';
declare abstract class BaseRepo<Tdocument> {
    protected readonly _model: Model<Tdocument>;
    constructor(_model: Model<Tdocument>);
    create(data: Partial<Tdocument>): Promise<HydratedDocument<Tdocument>>;
    insertMany(data: Tdocument[]): Promise<import("mongoose").IfAny<Tdocument, any, import("mongoose").Document<unknown, {}, Tdocument, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<Tdocument> & {
        __v: number;
    } & import("mongoose").AddDefaultId<Tdocument, {}, import("mongoose").DefaultSchemaOptions>>[]>;
    findAll({ filter, options, }?: {
        filter?: QueryFilter<Tdocument>;
        options?: QueryOptions<Tdocument>;
    }): Promise<HydratedDocument<Tdocument>[] | null>;
    findOne({ filter, projection, options, }: {
        filter: QueryFilter<Tdocument>;
        projection?: any;
        options?: QueryOptions<Tdocument>;
    }): Promise<HydratedDocument<Tdocument> | null>;
    findById({ id, projection, options, }: {
        id: Schema.Types.ObjectId | any;
        projection?: ProjectionType<Tdocument> | null | undefined;
        options?: QueryOptions<Tdocument>;
    }): Promise<HydratedDocument<Tdocument> | null>;
    findByIdAndUpdate({ id, update, options, }: {
        id: Schema.Types.ObjectId | any;
        update: UpdateQuery<Tdocument>;
        options?: QueryOptions<Tdocument> | null;
    }): Promise<HydratedDocument<Tdocument> | null>;
    findOneAndUpdate({ filter, update, options, }: {
        filter: QueryFilter<WithLevel1NestedPaths<Tdocument>>;
        update?: UpdateQuery<Tdocument>;
        options?: QueryOptions<Tdocument>;
    }): Promise<HydratedDocument<Tdocument> | null>;
    findByIdAndDelete({ id, options, }: {
        id: Schema.Types.ObjectId;
        options?: QueryOptions<Tdocument>;
    }): Promise<import("mongoose").IfAny<Tdocument, any, import("mongoose").Document<unknown, {}, Tdocument, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<Tdocument> & {
        __v: number;
    } & import("mongoose").AddDefaultId<Tdocument, {}, import("mongoose").DefaultSchemaOptions>> | null>;
    deleteOne({ filter, options, }: {
        filter: QueryFilter<Tdocument>;
        options?: QueryOptions<Tdocument>;
    }): Promise<import("mongodb").DeleteResult>;
    findOneAndDelete({ filter, options, }: {
        filter: QueryFilter<Tdocument>;
        options?: QueryOptions<Tdocument>;
    }): Promise<import("mongoose").IfAny<Tdocument, any, import("mongoose").Document<unknown, {}, Tdocument, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<Tdocument> & {
        __v: number;
    } & import("mongoose").AddDefaultId<Tdocument, {}, import("mongoose").DefaultSchemaOptions>> | null>;
    deleteMany({ filter, options, paranoid, }: {
        filter: QueryFilter<Tdocument>;
        options?: QueryOptions<Tdocument>;
        paranoid?: Boolean;
    }): Promise<import("mongodb").DeleteResult>;
    paginate<T>({ page, search, options, }: {
        page: number;
        search?: QueryFilter<Tdocument>;
        options?: QueryOptions<Tdocument>;
    }): Promise<{
        data: HydratedDocument<Tdocument>[] | null;
    }>;
}
export default BaseRepo;
//# sourceMappingURL=base.repo.d.ts.map
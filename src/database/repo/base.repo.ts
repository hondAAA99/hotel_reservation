import type {
  _QueryFilter,
  ModifyResult,
  QueryOptions,
  WithLevel1NestedPaths,
  PopulateOptions,
  UpdateQuery,
  ProjectionType,
  HydratedDocument,
  QueryFilter,
  Model,
  Schema,
} from 'mongoose'

abstract class BaseRepo<Tdocument> {
  constructor(protected readonly _model: Model<Tdocument>) {}

  async create(data: Partial<Tdocument>): Promise<HydratedDocument<Tdocument>> {
    return await this._model.create(data)
  }

  async insertMany(data: Tdocument[]) {
    return await this._model.insertMany(data)
  }

  async findAll({
    filter,
    options,
  }: {
    filter?: QueryFilter<Tdocument>
    options?: QueryOptions<Tdocument>
  } = {}): Promise<HydratedDocument<Tdocument>[] | null> {
    return await this._model
      .find(filter, options?.projection)
      .skip(options?.skip!)
      .limit(options?.limit!)
      .sort(options?.sort)
      .populate(options?.populate as PopulateOptions)
  }

  async findOne({
    filter,
    projection,
    options,
  }: {
    filter: QueryFilter<Tdocument>
    projection?: any
    options?: QueryOptions<Tdocument>
  }): Promise<HydratedDocument<Tdocument> | null> {
    return await this._model
      .findOne(filter, projection)
      .skip(options?.skip!)
      .limit(options?.limit!)
      .sort(options?.sort)
      .populate(options?.populate as PopulateOptions)
  }

  async findById({
    id,
    projection,
    options,
  }: {
    id: Schema.Types.ObjectId | any
    projection?: ProjectionType<Tdocument> | null | undefined
    options?: QueryOptions<Tdocument>
  }): Promise<HydratedDocument<Tdocument> | null> {
    return await this._model
      .findById(id, projection)
      .skip(options?.skip!)
      .limit(options?.limit!)
      .sort(options?.sort)
      .populate(options?.populate as PopulateOptions)
  }

  async findByIdAndUpdate({
    id,
    update,
    options,
  }: {
    id: Schema.Types.ObjectId | any
    update: UpdateQuery<Tdocument>
    options?: QueryOptions<Tdocument> | null
  }): Promise<HydratedDocument<Tdocument> | null> {
    return await this._model.findByIdAndUpdate(id, update, {
      new: true,
      ...options,
    })
  }

  async findOneAndUpdate({
    filter,
    update,
    options,
  }: {
    filter: QueryFilter<WithLevel1NestedPaths<Tdocument>>
    update?: UpdateQuery<Tdocument>
    options?: QueryOptions<Tdocument>
  }): Promise<HydratedDocument<Tdocument> | null> {
    return await this._model.findOneAndUpdate(filter, update, {
      ...options,
      returnDocument: 'after',
    })
  }

  async findByIdAndDelete({
    id,
    options,
  }: {
    id: Schema.Types.ObjectId
    options?: QueryOptions<Tdocument>
  }) {
    return await this._model.findByIdAndDelete(id, options)
  }

  async deleteOne({
    filter,
    options,
  }: {
    filter: QueryFilter<Tdocument>
    options?: QueryOptions<Tdocument>
  }) {
    return await this._model.deleteOne(filter)
  }

  async findOneAndDelete({
    filter,
    options,
  }: {
    filter: QueryFilter<Tdocument>
    options?: QueryOptions<Tdocument>
  }) {
    return await this._model.findOneAndDelete(filter)
  }

  async deleteMany({
    filter,
    options,
    paranoid = false,
  }: {
    filter: QueryFilter<Tdocument>
    options?: QueryOptions<Tdocument>
    paranoid?: Boolean
  }) {
    return await this._model.deleteMany(filter)
  }

  async paginate<T>({
    page,
    search = {},
    options,
  }: {
    page: number
    search?: QueryFilter<Tdocument>
    options?: QueryOptions<Tdocument>
  }) {
    page = !page || page < 0 ? 1 : Number(page)
    let limit = 20

    let skip = (page - 1) * limit

    const [data, totalDoc]: [any, number] = await Promise.all([
      this.findAll({
        filter: { ...(search ?? {}) },
        options: {
          skip,
          limit,
          options,
          ...(options?.projection ? { projection: options?.projection } : {}),
        },
      }),
      this._model.countDocuments({ ...(search ?? {}) }),
    ])

    let totalPages = totalDoc / limit

    return {
      meta: {
        totalDoc,
        currentPage: page,
        totalPages,
        limit,
      },
      data,
    }
  }
}

export default BaseRepo

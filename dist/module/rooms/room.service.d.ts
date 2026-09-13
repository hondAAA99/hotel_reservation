import { paymentService } from '../../common/service/payment.service.js';
import type { HUDoc } from '../../database/model/user.model.js';
import type { addRoomSchemaDTO, addRoomTypeSchemaDTO, confirmBookingSchemaDTO, searchRoomSchemaDTO } from './room.dto.js';
declare class roomServices {
    private readonly _userRepo;
    private readonly _roomRepo;
    private readonly _roomTypesRepo;
    private readonly _reservationRepo;
    private readonly _payment;
    constructor(_userRepo?: {
        readonly _model: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<import("../../database/model/user.model.js").IUser, {}, {}, {
            id: string;
        }, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, import("mongoose").Schema<import("../../database/model/user.model.js").IUser, import("mongoose").Model<import("../../database/model/user.model.js").IUser, any, any, any, any, any, import("../../database/model/user.model.js").IUser>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, {
            userName?: import("mongoose").SchemaDefinitionProperty<string, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            role?: import("mongoose").SchemaDefinitionProperty<string, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            email?: import("mongoose").SchemaDefinitionProperty<string, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            password?: import("mongoose").SchemaDefinitionProperty<string, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            phoneNumber?: import("mongoose").SchemaDefinitionProperty<string | undefined, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            DateOfBirth?: import("mongoose").SchemaDefinitionProperty<Date | undefined, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            nationality?: import("mongoose").SchemaDefinitionProperty<string | undefined, import("../../database/model/user.model.js").IUser, import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/user.model.js").IUser & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
        }, import("../../database/model/user.model.js").IUser>, import("../../database/model/user.model.js").IUser>;
        create(data: Partial<import("../../database/model/user.model.js").IUser>): Promise<import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }>;
        insertMany(data: import("../../database/model/user.model.js").IUser[]): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[]>;
        findAll({ filter, options, }?: {
            filter?: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[] | null>;
        findOne({ filter, projection, options, }: {
            filter: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            projection?: any;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findById({ id, projection, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            projection?: import("mongoose").ProjectionType<import("../../database/model/user.model.js").IUser> | null | undefined;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndUpdate({ id, update, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            update: import("mongoose").UpdateQuery<import("../../database/model/user.model.js").IUser>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser> | null;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findOneAndUpdate({ filter, update, options, }: {
            filter: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            update?: import("mongoose").UpdateQuery<import("../../database/model/user.model.js").IUser>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndDelete({ id, options, }: {
            id: import("mongoose").Schema.Types.ObjectId;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteOne({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<import("mongodb").DeleteResult>;
        findOneAndDelete({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/user.model.js").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteMany({ filter, options, paranoid, }: {
            filter: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
            paranoid?: Boolean;
        }): Promise<import("mongodb").DeleteResult>;
        paginate<T>({ page, search, options, }: {
            page: number;
            search?: import("mongoose")._QueryFilter<{
                password: string;
                userName: string;
                role: string;
                email: string;
                phoneNumber: string;
                DateOfBirth: Date;
                nationality: string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/user.model.js").IUser>;
        }): Promise<{
            meta: {
                totalDoc: number;
                currentPage: number;
                totalPages: number;
                limit: number;
            };
            data: any;
        }>;
    }, _roomRepo?: {
        readonly _model: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<import("../../database/model/room.model.js").IRoom, {}, {}, {
            id: string;
        }, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, import("mongoose").Schema<import("../../database/model/room.model.js").IRoom, import("mongoose").Model<import("../../database/model/room.model.js").IRoom, any, any, any, any, any, import("../../database/model/room.model.js").IRoom>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, {
            roomNumber?: import("mongoose").SchemaDefinitionProperty<number, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            roomType?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            reservoirId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            reservationFrom?: import("mongoose").SchemaDefinitionProperty<Date, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            reservationTo?: import("mongoose").SchemaDefinitionProperty<Date, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            price?: import("mongoose").SchemaDefinitionProperty<Number, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            roomCapacity?: import("mongoose").SchemaDefinitionProperty<Number, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            available?: import("mongoose").SchemaDefinitionProperty<boolean, import("../../database/model/room.model.js").IRoom, import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/room.model.js").IRoom & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
        }, import("../../database/model/room.model.js").IRoom>, import("../../database/model/room.model.js").IRoom>;
        create(data: Partial<import("../../database/model/room.model.js").IRoom>): Promise<import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }>;
        insertMany(data: import("../../database/model/room.model.js").IRoom[]): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[]>;
        findAll({ filter, options, }?: {
            filter?: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[] | null>;
        findOne({ filter, projection, options, }: {
            filter: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            projection?: any;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findById({ id, projection, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            projection?: import("mongoose").ProjectionType<import("../../database/model/room.model.js").IRoom> | null | undefined;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndUpdate({ id, update, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            update: import("mongoose").UpdateQuery<import("../../database/model/room.model.js").IRoom>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom> | null;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findOneAndUpdate({ filter, update, options, }: {
            filter: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            update?: import("mongoose").UpdateQuery<import("../../database/model/room.model.js").IRoom>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndDelete({ id, options, }: {
            id: import("mongoose").Schema.Types.ObjectId;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteOne({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<import("mongodb").DeleteResult>;
        findOneAndDelete({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/room.model.js").IRoom, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/room.model.js").IRoom & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteMany({ filter, options, paranoid, }: {
            filter: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
            paranoid?: Boolean;
        }): Promise<import("mongodb").DeleteResult>;
        paginate<T>({ page, search, options, }: {
            page: number;
            search?: import("mongoose")._QueryFilter<{
                roomNumber: number;
                roomType: import("mongoose").Types.ObjectId;
                reservoirId: import("mongoose").Types.ObjectId;
                reservationFrom: Date;
                reservationTo: Date;
                price: Number;
                roomCapacity: Number;
                available: boolean;
                "price.toString": (radix?: number) => string;
                "price.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "price.valueOf": () => number;
                "price.toFixed": (fractionDigits?: number) => string;
                "price.toExponential": (fractionDigits?: number) => string;
                "price.toPrecision": (precision?: number) => string;
                "roomCapacity.toString": (radix?: number) => string;
                "roomCapacity.toLocaleString": {
                    (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
                    (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
                };
                "roomCapacity.valueOf": () => number;
                "roomCapacity.toFixed": (fractionDigits?: number) => string;
                "roomCapacity.toExponential": (fractionDigits?: number) => string;
                "roomCapacity.toPrecision": (precision?: number) => string;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/room.model.js").IRoom>;
        }): Promise<{
            meta: {
                totalDoc: number;
                currentPage: number;
                totalPages: number;
                limit: number;
            };
            data: any;
        }>;
    }, _roomTypesRepo?: {
        readonly _model: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<import("../../database/model/roomTypes.model.js").IRoomTypes, {}, {}, {
            id: string;
        }, import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, import("mongoose").Schema<import("../../database/model/roomTypes.model.js").IRoomTypes, import("mongoose").Model<import("../../database/model/roomTypes.model.js").IRoomTypes, any, any, any, any, any, import("../../database/model/roomTypes.model.js").IRoomTypes>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("../../database/model/roomTypes.model.js").IRoomTypes, import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, {
            name?: import("mongoose").SchemaDefinitionProperty<string, import("../../database/model/roomTypes.model.js").IRoomTypes, import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/roomTypes.model.js").IRoomTypes & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            roomAdvantages?: import("mongoose").SchemaDefinitionProperty<import("../../common/enum/room.enum.js").roomAdvantagesType, import("../../database/model/roomTypes.model.js").IRoomTypes, import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/roomTypes.model.js").IRoomTypes & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
        }, import("../../database/model/roomTypes.model.js").IRoomTypes>, import("../../database/model/roomTypes.model.js").IRoomTypes>;
        create(data: Partial<import("../../database/model/roomTypes.model.js").IRoomTypes>): Promise<import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }>;
        insertMany(data: import("../../database/model/roomTypes.model.js").IRoomTypes[]): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[]>;
        findAll({ filter, options, }?: {
            filter?: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string | undefined;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[] | null>;
        findOne({ filter, projection, options, }: {
            filter: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string | undefined;
            }>;
            projection?: any;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findById({ id, projection, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            projection?: import("mongoose").ProjectionType<import("../../database/model/roomTypes.model.js").IRoomTypes> | null | undefined;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndUpdate({ id, update, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            update: import("mongoose").UpdateQuery<import("../../database/model/roomTypes.model.js").IRoomTypes>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes> | null;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findOneAndUpdate({ filter, update, options, }: {
            filter: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string;
            }>;
            update?: import("mongoose").UpdateQuery<import("../../database/model/roomTypes.model.js").IRoomTypes>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndDelete({ id, options, }: {
            id: import("mongoose").Schema.Types.ObjectId;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteOne({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string | undefined;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<import("mongodb").DeleteResult>;
        findOneAndDelete({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string | undefined;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteMany({ filter, options, paranoid, }: {
            filter: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string | undefined;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
            paranoid?: Boolean;
        }): Promise<import("mongodb").DeleteResult>;
        paginate<T>({ page, search, options, }: {
            page: number;
            search?: import("mongoose")._QueryFilter<{
                name: string;
                roomAdvantages: import("../../common/enum/room.enum.js").roomAdvantagesType;
                "roomAdvantages.beds": string;
                "roomAdvantages.view": string;
                "roomAdvantages.area": string;
                "roomAdvantages.breakfast": string;
                "roomAdvantages.livingRoom": string | undefined;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/roomTypes.model.js").IRoomTypes>;
        }): Promise<{
            meta: {
                totalDoc: number;
                currentPage: number;
                totalPages: number;
                limit: number;
            };
            data: any;
        }>;
    }, _reservationRepo?: {
        readonly _model: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<import("../../database/model/reservations.model.js").IReservation, {}, {}, {
            id: string;
        }, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, import("mongoose").Schema<import("../../database/model/reservations.model.js").IReservation, import("mongoose").Model<import("../../database/model/reservations.model.js").IReservation, any, any, any, any, any, import("../../database/model/reservations.model.js").IReservation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, {
            guestId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            roomId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            nights?: import("mongoose").SchemaDefinitionProperty<number, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            nightPrice?: import("mongoose").SchemaDefinitionProperty<number, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            total?: import("mongoose").SchemaDefinitionProperty<number, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            guests?: import("mongoose").SchemaDefinitionProperty<number, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            discount?: import("mongoose").SchemaDefinitionProperty<number, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
            paid?: import("mongoose").SchemaDefinitionProperty<string, import("../../database/model/reservations.model.js").IReservation, import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {
                id: string;
            }, import("mongoose").DefaultSchemaOptions> & Omit<import("../../database/model/reservations.model.js").IReservation & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, "id"> & import("mongoose").HydratedDocumentOverrides<{
                id: string;
            }>>;
        }, import("../../database/model/reservations.model.js").IReservation>, import("../../database/model/reservations.model.js").IReservation>;
        create(data: Partial<import("../../database/model/reservations.model.js").IReservation>): Promise<import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }>;
        insertMany(data: import("../../database/model/reservations.model.js").IReservation[]): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[]>;
        findAll({ filter, options, }?: {
            filter?: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[] | null>;
        findOne({ filter, projection, options, }: {
            filter: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            projection?: any;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findById({ id, projection, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            projection?: import("mongoose").ProjectionType<import("../../database/model/reservations.model.js").IReservation> | null | undefined;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndUpdate({ id, update, options, }: {
            id: import("mongoose").Schema.Types.ObjectId | any;
            update: import("mongoose").UpdateQuery<import("../../database/model/reservations.model.js").IReservation>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation> | null;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findOneAndUpdate({ filter, update, options, }: {
            filter: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            update?: import("mongoose").UpdateQuery<import("../../database/model/reservations.model.js").IReservation>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        findByIdAndDelete({ id, options, }: {
            id: import("mongoose").Schema.Types.ObjectId;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteOne({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<import("mongodb").DeleteResult>;
        findOneAndDelete({ filter, options, }: {
            filter: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/reservations.model.js").IReservation, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/reservations.model.js").IReservation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null>;
        deleteMany({ filter, options, paranoid, }: {
            filter: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
            paranoid?: Boolean;
        }): Promise<import("mongodb").DeleteResult>;
        paginate<T>({ page, search, options, }: {
            page: number;
            search?: import("mongoose")._QueryFilter<{
                paid: string;
                guestId: import("mongoose").Types.ObjectId;
                roomId: import("mongoose").Types.ObjectId;
                nights: number;
                nightPrice: number;
                total: number;
                guests: number;
                discount: number;
            }>;
            options?: import("mongoose").QueryOptions<import("../../database/model/reservations.model.js").IReservation>;
        }): Promise<{
            meta: {
                totalDoc: number;
                currentPage: number;
                totalPages: number;
                limit: number;
            };
            data: any;
        }>;
    }, _payment?: paymentService);
    getRoomTypes(): Promise<(import("mongoose").Document<unknown, {}, import("../../database/model/roomTypes.model.js").IRoomTypes, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/model/roomTypes.model.js").IRoomTypes & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[] | null>;
    addRoomType(body: addRoomTypeSchemaDTO): Promise<string>;
    addRoom(body: addRoomSchemaDTO): Promise<string>;
    searchAvailableRooms(query: searchRoomSchemaDTO): Promise<{
        meta: {
            totalDoc: number;
            currentPage: number;
            totalPages: number;
            limit: number;
        };
        data: any;
    }>;
    Booking(body: confirmBookingSchemaDTO, user: HUDoc): Promise<{
        message: string;
        stay: {
            roomNumber: number;
            roomType: "classA" | "classB" | "classC";
            checkIn: Date;
            checkout: Date;
            guests: number;
        };
        guest: {
            fullName: string;
            email: string;
            phone: string;
            specialRequests: string;
        };
        priceSummary: {
            roomName: string;
            nights: number;
            nightPrice: number;
            discount: number;
            total: number;
        };
        reservationID: string;
    }>;
    checkout(id: string): Promise<{
        url: string | null;
    }>;
}
declare const _default: roomServices;
export default _default;
//# sourceMappingURL=room.service.d.ts.map
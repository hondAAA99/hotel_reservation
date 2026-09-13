import z from 'zod';
import { genRules } from '../../common/utils/validation.generalRules.js';
import { roomTypeEnum } from '../../common/enum/room.enum.js';
export const addRoomTypeSchema = {
    body: z.object({
        name: genRules.userName,
        roomAdvantages: genRules.roomAdvantages,
    }),
};
export const addRoomSchema = {
    body: z.object({
        roomNumber: z.number(),
        roomType: z.enum(roomTypeEnum),
        price: z.number(),
        roomCapacity: z.number(),
    }),
};
export const confirmBookingSchema = {
    body: z.object({
        roomNumber: z.number().int().positive(),
        roomType: z.enum(roomTypeEnum),
        checkIn: genRules.dates,
        checkout: genRules.dates,
        guests: genRules.guests,
        fullName: z.string().min(2),
        email: z.email(),
        phone: z.string().min(8),
        specialRequests: z.string().optional().default(''),
    }),
};
export const searchRoomSchema = {
    query: z.object({
        guests: genRules.guests,
        checkIn: genRules.dates,
        checkout: genRules.dates,
        page: z.string().transform(val => (val ? Number(val) : 0)),
    }),
};
//# sourceMappingURL=room.validation.schema.js.map
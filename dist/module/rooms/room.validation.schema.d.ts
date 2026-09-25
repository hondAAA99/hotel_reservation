import z from 'zod';
export declare const addRoomTypeSchema: {
    body: z.ZodObject<{
        name: z.ZodString;
        roomAdvantages: z.ZodObject<{
            beds: z.ZodString;
            view: z.ZodString;
            area: z.ZodString;
            breakfast: z.ZodString;
            livingRoom: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
export declare const addRoomSchema: {
    body: z.ZodObject<{
        roomNumber: z.ZodNumber;
        roomType: z.ZodEnum<{
            classA: "classA";
            classB: "classB";
            classC: "classC";
        }>;
        price: z.ZodNumber;
        roomCapacity: z.ZodNumber;
    }, z.z.core.$strip>;
};
export declare const confirmBookingSchema: {
    body: z.ZodObject<{
        roomNumber: z.ZodNumber;
        roomType: z.ZodString;
        checkIn: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
        checkout: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
        guests: z.ZodTransform<number, unknown>;
        fullName: z.ZodString;
        email: z.ZodEmail;
        phone: z.ZodString;
        specialRequests: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.z.core.$strip>;
};
export declare const searchRoomSchema: {
    query: z.ZodObject<{
        guests: z.ZodTransform<number, unknown>;
        checkIn: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
        checkout: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
        page: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=room.validation.schema.d.ts.map
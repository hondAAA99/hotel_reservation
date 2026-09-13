import z from 'zod';
export declare const genRules: {
    userName: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    cpassword: z.ZodString;
    phone: z.ZodString;
    DateOfBirth: z.ZodDate;
    nationality: z.ZodString;
    roomAdvantages: z.ZodObject<{
        beds: z.ZodString;
        view: z.ZodString;
        area: z.ZodString;
        breakfast: z.ZodString;
        livingRoom: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
    dates: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
    guests: z.ZodTransform<number, unknown>;
};
//# sourceMappingURL=validation.generalRules.d.ts.map
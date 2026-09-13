import z from 'zod';
export const genRules = {
    userName: z.string(),
    email: z.email(),
    password: z.string(),
    cpassword: z.string(),
    phone: z.string(),
    DateOfBirth: z.date(),
    nationality: z.string(),
    roomAdvantages: z.object({
        beds: z.string().min(1),
        view: z.string().min(1),
        area: z.string().min(1),
        breakfast: z.string().min(1),
        livingRoom: z.string().min(1).optional(),
    }),
    dates: z.string().transform(val => (val ? new Date(val) : new Date())),
    guests: z.transform(val => Number(val)),
};
//# sourceMappingURL=validation.generalRules.js.map
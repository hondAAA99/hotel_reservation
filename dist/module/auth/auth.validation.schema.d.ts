import z from 'zod';
export declare const signUpSchema: {
    body: z.ZodObject<{
        userName: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        cpassword: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        DateOfBirth: z.ZodOptional<z.ZodDate>;
        nationality: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
};
export declare const signInSchema: {
    body: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=auth.validation.schema.d.ts.map
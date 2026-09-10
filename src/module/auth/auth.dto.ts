import type z from 'zod'
import type { signInSchema, signUpSchema } from './auth.validation.schema.js'

export type signUpDTO = z.infer<typeof signUpSchema.body>
export type signInDTO = z.infer<typeof signInSchema.body>

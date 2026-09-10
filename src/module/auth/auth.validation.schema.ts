import z from 'zod'
import { genRules } from '../../common/utils/validation.generalRules.js'

export const signUpSchema = {
  body: z
    .object({
      userName: genRules.userName,
      email: genRules.email,
      password: genRules.password,
      cpassword: genRules.cpassword,
      phone: genRules.phone.optional(),
      DateOfBirth: genRules.DateOfBirth.optional(),
      nationality: genRules.nationality.optional(),
    })
    .superRefine((data, ctx) => {
      if (data.password != data.cpassword) {
        ctx.addIssue('passwords does not match')
      }

      if (
        data.DateOfBirth &&
        new Date(data.DateOfBirth).getMilliseconds() >= Date.now()
      )
        ctx.addIssue('invalid date')
    }),
}

export const signInSchema = {
  body: z.object({
    email: genRules.email,
    password: genRules.password,
  }),
}

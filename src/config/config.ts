import { config } from 'dotenv'
config({})

export const DATA_BASE_URI_LOCAL = process.env.DATA_BASE_URI_LOCAL as string
export const DATA_BASE_URI_ONLINE = process.env.DATA_BASE_URI_ONLINE as string
export const PORT = process.env.PORT as string
export const SECRET_ADMIN_ACCESS_TOKEN = process.env
  .SECRET_ADMIN_ACCESS_TOKEN as string
export const SECRET_ADMIN_REFRESH_TOKEN = process.env
  .SECRET_ADMIN_REFRESH_TOKEN as string
export const SECRET_USER_ACCESS_TOKEN = process.env
  .SECRET_USER_ACCESS_TOKEN as string
export const SECRET_USER_REFRESH_TOKEN = process.env
  .SECRET_USER_REFRESH_TOKEN as string

export const CIPHER_IV_SIZE = Number(process.env.CIPHER_IV_SIZE) as number
export const ENCRYPTION_ALGORITM = process.env.ENCRYPTION_ALGORITM as string
export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY as string
export const PREFIX_ADMIN_TOKEN = process.env.PREFIX_ADMIN_TOKEN as string
export const PREFIX_USER_TOKEN = process.env.PREFIX_USER_TOKEN as string
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY as string
export const CANCEL_URL = process.env.CANCEL_URL as string
export const SUCCESS_URL = process.env.SUCCESS_URL as string

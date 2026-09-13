import { config } from 'dotenv';
config({});
export const DATA_BASE_URI_LOCAL = process.env.DATA_BASE_URI_LOCAL;
export const DATA_BASE_URI_ONLINE = process.env.DATA_BASE_URI_ONLINE;
export const PORT = process.env.PORT;
export const SECRET_ADMIN_ACCESS_TOKEN = process.env
    .SECRET_ADMIN_ACCESS_TOKEN;
export const SECRET_ADMIN_REFRESH_TOKEN = process.env
    .SECRET_ADMIN_REFRESH_TOKEN;
export const SECRET_USER_ACCESS_TOKEN = process.env
    .SECRET_USER_ACCESS_TOKEN;
export const SECRET_USER_REFRESH_TOKEN = process.env
    .SECRET_USER_REFRESH_TOKEN;
export const CIPHER_IV_SIZE = Number(process.env.CIPHER_IV_SIZE);
export const ENCRYPTION_ALGORITM = process.env.ENCRYPTION_ALGORITM;
export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
export const PREFIX_ADMIN_TOKEN = process.env.PREFIX_ADMIN_TOKEN;
export const PREFIX_USER_TOKEN = process.env.PREFIX_USER_TOKEN;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
export const CANCEL_URL = process.env.CANCEL_URL;
export const SUCCESS_URL = process.env.SUCCESS_URL;
//# sourceMappingURL=config.js.map
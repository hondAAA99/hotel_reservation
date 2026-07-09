import { config } from 'dotenv'
config({})

export const DATA_BASE_URI = process.env.DATA_BASE_URI as string
export const PORT = process.env.PORT as string

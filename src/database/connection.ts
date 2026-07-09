import mongoose from 'mongoose'
import { DATA_BASE_URI } from '../config/config.js'
import { ErrorInternalServerError } from '../common/utils/globbalErrorHandler.js'

export async function connectToDataBase() {
  await mongoose.connect(DATA_BASE_URI).then(() => {
    console.log('connected to data base')
  })
  .catch(err => {
    return ErrorInternalServerError('failed to connect to data base')
  })
}


import express from 'express'
import { PORT } from './config/config.js'
import { connectToDataBase } from './database/connection.js'
import { globalErrorHandling } from './common/utils/globbalErrorHandler.js'


const app = express()

function bootstrap() {
  app.use(express.json())
  connectToDataBase()

  app.use(globalErrorHandling)
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
  })
}

export default bootstrap

import express from 'express'
import { PORT } from './config/config.js'
import { connectToDataBase } from './database/connection.js'
import { globalErrorHandling } from './common/middleware/error.middleware.js'
import authRouter from './module/auth/auth.controller.js'
import roomsRouter from './module/rooms/room.controller.js'

const app = express()

function bootstrap() {
  app.use(express.json())
  connectToDataBase()
  app.use('/auth', authRouter)
  app.use('/rooms', roomsRouter)

  app.use(globalErrorHandling)
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
  })
}

export default bootstrap

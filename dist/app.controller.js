import express from 'express';
import path from 'node:path';
import { PORT } from './config/config.js';
import { connectToDataBase } from './database/connection.js';
import { globalErrorHandling } from './common/middleware/error.middleware.js';
import authRouter from './module/auth/auth.controller.js';
import roomsRouter from './module/rooms/room.controller.js';
import cors from 'cors';
import morgan from 'morgan';
import { roomAvailable } from './common/cron/roomAvailiabilty.cron.js';
const app = express();
const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Test-Header'],
    optionsSuccessStatus: 204,
};
function bootstrap() {
    roomAvailable();
    app.use(express.json());
    app.use(cors({ origin: '*' }));
    app.use(morgan('combined'));
    connectToDataBase();
    app.use('/auth', authRouter);
    app.use('/rooms', roomsRouter);
    app.use(globalErrorHandling);
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    });
}
export default bootstrap;
//# sourceMappingURL=app.controller.js.map
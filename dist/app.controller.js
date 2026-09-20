import express from 'express';
import path from 'node:path';
import { PORT } from './config/config.js';
import { connectToDataBase } from './database/connection.js';
import { globalErrorHandling } from './common/middleware/error.middleware.js';
import authRouter from './module/auth/auth.controller.js';
import roomsRouter from './module/rooms/room.controller.js';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
function bootstrap() {
    app.use(express.json(), cors(), morgan('combined'));
    app.get('/cors-test', (_req, res) => {
        res.sendFile(path.resolve(process.cwd(), 'public', 'cors-test.html'));
    });
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
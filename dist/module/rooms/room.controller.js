import { Router } from 'express';
import roomServices from './room.service.js';
import { SuccessResponse } from '../../common/utils/ErrorHandlers.js';
import { validation } from '../../common/middleware/validation.js';
import { addRoomSchema, addRoomTypeSchema, confirmBookingSchema, searchRoomSchema, } from './room.validation.schema.js';
import { authenticate } from '../../common/middleware/authentication.middleware.js';
import { authorization } from '../../common/middleware/authorization.js';
import { roleEnum } from '../../common/enum/user.enum.js';
const roomsRouter = Router();
const Service = roomServices;
roomsRouter.get('/types', authenticate, authorization([roleEnum.admin]), async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.getRoomTypes(),
        statusCode: 200,
    });
});
roomsRouter.post('/types', validation(addRoomTypeSchema), authenticate, authorization([roleEnum.admin]), async (req, res, next) => {
    const result = await Service.addRoomType(req.body);
    return SuccessResponse({
        res,
        data: result,
        statusCode: 201,
    });
});
roomsRouter.post('/', validation(addRoomSchema), authenticate, authorization([roleEnum.admin]), async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.addRoom(req.body),
        statusCode: 201,
    });
});
roomsRouter.get('/', validation(searchRoomSchema), async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.searchAvailableRooms(req.query),
        statusCode: 200,
    });
});
roomsRouter.get('/:id', async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.getRoomById(req.params.id),
        statusCode: 200,
    });
});
roomsRouter.post('/confirm', authenticate, validation(confirmBookingSchema), async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.Booking(req.body, req.user),
        statusCode: 201,
    });
});
roomsRouter.get('/confirm-stripe/:id', authenticate, async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.checkout(req.params.id, req.user),
        statusCode: 200,
    });
});
roomsRouter.get('/all', async (req, res, next) => {
    return SuccessResponse({
        res,
        data: await Service.getAllRooms(),
        statusCode: 201,
    });
});
export default roomsRouter;
//# sourceMappingURL=room.controller.js.map
import { ErrorResponse } from '../utils/ErrorHandlers.js';
export const globalErrorHandling = (err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({
        status,
        err: { message: err.message, extra: err.stack },
        stack: err.stack,
    });
};
//# sourceMappingURL=error.middleware.js.map
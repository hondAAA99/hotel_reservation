import { ErrorForbidden } from '../utils/ErrorHandlers.js';
export function authorization(roles) {
    return (req, res, next) => {
        if (!roles.map((role) => role == req.user?.role)) {
            return ErrorForbidden();
        }
        next();
    };
}
//# sourceMappingURL=authorization.js.map
import { ErrorUnAuthorizedRequest } from '../utils/ErrorHandlers.js';
export function preAuthenticate(req, res, next) {
    if (!req.headers['authorization'])
        ErrorUnAuthorizedRequest('please signUp or login');
    next();
}
//# sourceMappingURL=preAuthenticate.middleware.js.map
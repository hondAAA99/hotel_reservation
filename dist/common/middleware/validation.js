import zod from 'zod';
import { ErrorBadRequest } from '../utils/ErrorHandlers.js';
export function validation(schema) {
    return async (req, res, next) => {
        let errArr = [];
        for (let key of Object.keys(schema)) {
            if (!key)
                continue;
            const { success, error } = schema[key]?.safeParse(req[key]);
            if (!success) {
                errArr.push(JSON.stringify({
                    name: error.name,
                    message: error.message,
                }));
            }
        }
        if (errArr.length)
            return ErrorBadRequest('Bad request exception', errArr);
        next();
    };
}
//# sourceMappingURL=validation.js.map
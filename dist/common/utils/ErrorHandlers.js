export class ErrorResponse extends Error {
    statusCode;
    message;
    constructor({ message, statusCode, cause, }) {
        super(message);
        ((this.message = message), (this.statusCode = statusCode));
        this.cause = cause;
    }
}
export const ErrorUnAuthorizedRequest = (message = 'you are not authorized to access this page', cause) => {
    throw new ErrorResponse({ message, statusCode: 401, cause });
};
export const ErrorRedirect = (message = 'redirection', cause) => {
    throw new ErrorResponse({ message, statusCode: 301, cause });
};
export const ErrorForbidden = (message = 'forbidden response due to error when processing the request data', cause) => {
    throw new ErrorResponse({ message, statusCode: 403, cause });
};
export const ErrorNotFound = (message = 'failed to find the data', cause) => {
    throw new ErrorResponse({ message, statusCode: 404, cause });
};
export const ErrorConflict = (message = 'conflict', cause) => {
    throw new ErrorResponse({ message, statusCode: 402, cause });
};
export const ErrorInternalServerError = (message, cause) => {
    throw new ErrorResponse({ message, statusCode: 500, cause });
};
export const ErrorBadRequest = (message = 'Bad request exception ', cause) => {
    throw new ErrorResponse({ message, statusCode: 400, cause });
};
export const SuccessResponse = ({ res, statusCode = 200, data, }) => {
    return res.status(statusCode).json(data);
};
//# sourceMappingURL=ErrorHandlers.js.map
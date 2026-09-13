import type { Response } from 'express';
export declare class ErrorResponse extends Error {
    statusCode: number;
    message: any;
    constructor({ message, statusCode, cause, }: {
        message: string;
        statusCode: number;
        cause?: any;
    });
}
export declare const ErrorUnAuthorizedRequest: (message?: string, cause?: any) => never;
export declare const ErrorRedirect: (message?: string, cause?: any) => never;
export declare const ErrorForbidden: (message?: string, cause?: any) => never;
export declare const ErrorNotFound: (message?: string, cause?: any) => never;
export declare const ErrorConflict: (message?: string, cause?: any) => never;
export declare const ErrorInternalServerError: (message: any, cause?: any) => never;
export declare const ErrorBadRequest: (message?: any, cause?: any) => never;
export declare const SuccessResponse: ({ res, statusCode, data, }: {
    res: Response;
    statusCode?: number;
    data: any;
}) => Response<any, Record<string, any>>;
//# sourceMappingURL=ErrorHandlers.d.ts.map
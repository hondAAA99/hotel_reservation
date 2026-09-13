import type { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/ErrorHandlers.js';
export declare const globalErrorHandling: (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error.middleware.d.ts.map
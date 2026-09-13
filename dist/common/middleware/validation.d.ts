import zod from 'zod';
import type { NextFunction, Request, Response } from 'express';
type reqType = keyof Request;
type SchemaType = Partial<Record<reqType, zod.ZodSchema>>;
export declare function validation(schema: SchemaType): (req: Request, res: Response, next: NextFunction) => Promise<undefined>;
export {};
//# sourceMappingURL=validation.d.ts.map
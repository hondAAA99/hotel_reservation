import 'express';
import type { HUDoc } from '../../database/model/user.model.js';
declare global {
    namespace Express {
        interface Request {
            user?: HUDoc;
        }
    }
}
//# sourceMappingURL=request.d.ts.map
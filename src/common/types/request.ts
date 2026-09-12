import 'express'
import type { HUDoc } from '../../database/model/user.model.js'

declare global {
  namespace Express {
    export interface Request {
      user?: HUDoc
    }
  }
}

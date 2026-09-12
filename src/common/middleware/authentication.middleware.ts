import type { NextFunction, Request, Response } from 'express'
import { ErrorBadRequest, ErrorRedirect } from '../utils/ErrorHandlers.js'
import { TokenVerify } from '../security/jsonWebTokens.js'
import {
  PREFIX_ADMIN_TOKEN,
  SECRET_ADMIN_ACCESS_TOKEN,
  SECRET_USER_ACCESS_TOKEN,
} from '../../config/config.js'
import userRepo from '../../database/repo/user.repo.js'
import type { HUDoc } from '../../database/model/user.model.js'

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers
  if (!authorization) {
    return ErrorRedirect('please login before getting further', {
      reDirect: 'GET auth/',
    })
  }
  const [berear, token] = authorization.split(' ')
  if (!berear || !token) ErrorBadRequest('invalid token')
  let secret
  if (berear == PREFIX_ADMIN_TOKEN) {
    secret = SECRET_ADMIN_ACCESS_TOKEN
  } else {
    secret = SECRET_USER_ACCESS_TOKEN
  }

  const decode = TokenVerify({ token: token!, secret })
  const user = (await userRepo.findById({ id: decode.userId })) as HUDoc

  req.user = user

  next()
}

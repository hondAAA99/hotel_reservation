import mongoose from 'mongoose'
import userModel from '../model/user.model.js'
import type { IUser } from '../model/user.model.js'
import BaseRepo from './base.repo.js'

class userRepo extends BaseRepo<IUser> {
  constructor(public readonly _model = userModel) {
    super(_model)
  }
}

export default new userRepo()

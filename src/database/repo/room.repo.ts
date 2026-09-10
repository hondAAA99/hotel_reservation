import mongoose from 'mongoose'
import roomModel from '../model/room.model.js'
import type { IRoom } from '../model/room.model.js'
import BaseRepo from './base.repo.js'

class roomRepo extends BaseRepo<IRoom> {
  constructor(public readonly _model = roomModel) {
    super(_model)
  }
}

export default new roomRepo()

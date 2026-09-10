import mongoose from 'mongoose'
import BaseRepo from './base.repo.js'
import type { IRoomTypes } from '../model/roomTypes.model.js'
import RoomTypesModel from '../model/roomTypes.model.js'

class roomTypesRepo extends BaseRepo<IRoomTypes> {
  constructor(public readonly _model = RoomTypesModel) {
    super(_model)
  }
}

export default new roomTypesRepo()

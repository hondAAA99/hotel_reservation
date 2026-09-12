import BaseRepo from './base.repo.js'
import type { IReservation } from '../model/reservations.model.js'
import ReservationModel from '../model/reservations.model.js'

class reservationRepo extends BaseRepo<IReservation> {
  constructor(public readonly _model = ReservationModel) {
    super(_model)
  }
}

export default new reservationRepo()

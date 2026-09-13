import BaseRepo from './base.repo.js';
import ReservationModel from '../model/reservations.model.js';
class reservationRepo extends BaseRepo {
    _model;
    constructor(_model = ReservationModel) {
        super(_model);
        this._model = _model;
    }
}
export default new reservationRepo();
//# sourceMappingURL=reservation.repo.js.map
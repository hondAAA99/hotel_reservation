import mongoose from 'mongoose';
import BaseRepo from './base.repo.js';
import RoomTypesModel from '../model/roomTypes.model.js';
class roomTypesRepo extends BaseRepo {
    _model;
    constructor(_model = RoomTypesModel) {
        super(_model);
        this._model = _model;
    }
}
export default new roomTypesRepo();
//# sourceMappingURL=roomTypes.repo.js.map
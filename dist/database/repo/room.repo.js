import mongoose from 'mongoose';
import roomModel from '../model/room.model.js';
import BaseRepo from './base.repo.js';
class roomRepo extends BaseRepo {
    _model;
    constructor(_model = roomModel) {
        super(_model);
        this._model = _model;
    }
}
export default new roomRepo();
//# sourceMappingURL=room.repo.js.map
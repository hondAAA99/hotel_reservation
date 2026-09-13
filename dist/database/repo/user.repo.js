import mongoose from 'mongoose';
import userModel from '../model/user.model.js';
import BaseRepo from './base.repo.js';
class userRepo extends BaseRepo {
    _model;
    constructor(_model = userModel) {
        super(_model);
        this._model = _model;
    }
}
export default new userRepo();
//# sourceMappingURL=user.repo.js.map
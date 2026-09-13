import { roleEnum } from '../../common/enum/user.enum.js';
import { GlobalCompare } from '../../common/security/hash.js';
import { generateToken } from '../../common/security/jsonWebTokens.js';
import { ErrorConflict, ErrorInternalServerError, ErrorNotFound, ErrorUnAuthorizedRequest, } from '../../common/utils/ErrorHandlers.js';
import { SECRET_ADMIN_ACCESS_TOKEN, SECRET_ADMIN_REFRESH_TOKEN, SECRET_USER_ACCESS_TOKEN, SECRET_USER_REFRESH_TOKEN, } from '../../config/config.js';
import userRepo from '../../database/repo/user.repo.js';
class authServices {
    _userRepo = userRepo;
    constructor() { }
    async signUp(body) {
        const { userName, email, password, phone, DateOfBirth, nationality } = body;
        try {
            if (await this._userRepo.findOne({ filter: { email } })) {
                console.log(await this._userRepo.findOne({ filter: { email } }));
                return ErrorConflict('email already registered');
            }
        }
        catch (error) {
            return ErrorInternalServerError(error.message);
        }
        const userPayload = {
            userName,
            email,
            password,
            ...(DateOfBirth ? { DateOfBirth } : {}),
            ...(nationality ? { nationality } : {}),
            ...(phone ? { phoneNumber: phone } : {}),
        };
        const user = await this._userRepo.create(userPayload).catch(err => {
            return ErrorInternalServerError(err.message);
        });
        if (!user) {
            return ErrorInternalServerError('error in user creation');
        }
        return 'email creation success';
    }
    async signIn(body) {
        const { email, password } = body;
        let user;
        await this._userRepo
            .findOne({
            filter: { email },
        })
            .then((val) => {
            if (!val)
                ErrorNotFound('email not found');
            // if (!GlobalCompare({ plainText: password, hashText: val.password })) {
            //   return ErrorUnAuthorizedRequest('wrong password')
            // }
            user = val;
        })
            .catch(err => {
            return ErrorInternalServerError(err.message);
        });
        const accessToken = generateToken({
            role: user.role,
            userId: user.id,
        }, user.role == roleEnum.user
            ? SECRET_USER_ACCESS_TOKEN
            : SECRET_ADMIN_ACCESS_TOKEN);
        const refreshToken = generateToken({
            role: user.role,
            userId: user.id,
        }, user.role == roleEnum.user
            ? SECRET_USER_REFRESH_TOKEN
            : SECRET_ADMIN_REFRESH_TOKEN);
        return { accessToken, refreshToken };
    }
}
export default new authServices();
//# sourceMappingURL=auth.service.js.map
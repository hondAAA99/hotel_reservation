import type { signInDTO, signUpDTO } from './auth.dto.js';
declare class authServices {
    private readonly _userRepo;
    constructor();
    signUp(body: signUpDTO): Promise<string>;
    signIn(body: signInDTO): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
declare const _default: authServices;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map
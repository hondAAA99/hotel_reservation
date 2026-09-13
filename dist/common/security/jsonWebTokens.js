import jsonwebtoken from 'jsonwebtoken';
export function generateToken(payload, secret, options = { expiresIn: 3 * 60 * 1000 }) {
    return jsonwebtoken.sign(payload, secret, options);
}
export const TokenVerify = ({ token, secret, }) => {
    return jsonwebtoken.verify(token, secret);
};
//# sourceMappingURL=jsonWebTokens.js.map
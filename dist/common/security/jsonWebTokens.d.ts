export declare function generateToken(payload: {
    userId: string;
    role: string;
}, secret: string, options?: any): string;
export declare const TokenVerify: ({ token, secret, }: {
    token: string;
    secret: string;
}) => any;
//# sourceMappingURL=jsonWebTokens.d.ts.map
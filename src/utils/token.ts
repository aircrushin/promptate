import * as jwt from 'jsonwebtoken';

export function generateToken(apiKey: string, expSeconds: number): string {
    let id: string, secret: string;

    try {
        [id, secret] = apiKey.split(".");
    } catch (e) {
        throw new Error(`Invalid apiKey: ${e}`);
    }

    const currentTimeMillis = new Date().getTime();
    const payload = {
        api_key: id,
        exp: Math.round(currentTimeMillis / 1000) + expSeconds,
        timestamp: Math.round(currentTimeMillis / 1000),
    };

    return jwt.sign(payload, secret, {
        algorithm: "HS256",
        // 不再传递一个错误的 header 参数
    });
}

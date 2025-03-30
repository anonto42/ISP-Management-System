import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const createToken = (id:string) => {

    const options: SignOptions = {
        expiresIn: '2d',
        algorithm: 'HS256'
    };

    return jwt.sign({id}, SECRET_KEY!, options);
};


export const verifyToken = async () => {
    try {
        const coookie = await cookies()
        const token = coookie.get('idmsq');
        if (!token) return false;
        const { id } = jwt.verify(token.value, SECRET_KEY!) as JwtPayload;
        if (!id) {
            return false
        }
        return id as string;
    } catch (error) {
        return false;
    }
};

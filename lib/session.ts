import { cookies } from 'next/headers';
import { JWTPayload, jwtVerify, SignJWT } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export const createToken = async (value: JWTPayload) => {

    const token = await new SignJWT(value)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2d")
        .sign(SECRET_KEY)
    
    return token;
};

export const verifyToken = async () => {
    const cookie = await cookies();
    const jwt = cookie.get("idmsq");
    if (!jwt?.value) return false;
    
    const { payload } = await jwtVerify(jwt?.value as string, SECRET_KEY);

    return payload ? { id: payload.id, role: payload.role } : false;
};

export const isAdmin = async () => {
    try {
        const session = await verifyToken();
        return session? session.role === "admin" : false;
        
    } catch (error) {
        console.log(error)
        return false;
    }
}
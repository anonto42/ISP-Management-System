import prismaDB from '@/prisma/pot';
import { User } from '@prisma/client';
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


export const verifyToken = async (): Promise<boolean | string> => {
    try {
        const cookie = await cookies(); // Assuming cookies() is a method returning cookies
        const token = cookie.get('idmsq');
        if (!token) return false;

        const { id } = jwt.verify(token.value, SECRET_KEY!) as JwtPayload;
        if (!id) {
            return false;
        }
        return id as string;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error);
        } else {
            console.error("An unknown error occurred.");
        }
        return false;
    }
};

export const getUser = async (): Promise<User | boolean> => {
    const deCodedValue = await verifyToken();
    if (!deCodedValue) {
        return false;  
    }else{
        const user = await prismaDB.user.findUnique({
            where:{
                id:deCodedValue as string
            }
        });
        if (!user) {
            return false; 
        }
        return user
    }
}
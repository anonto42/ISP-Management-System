import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { createToken } from "@/lib/session";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        if (!email.trim() || !password.trim()) {
            return NextResponse.json(
                {
                    message: "All fields are required!",
                    success: false
                },
                {
                    status: 400
                }
            );
        }

        const emailAddress:string = email.trim().toString();
        const user = await prismaDB.user.findUnique({
            where: { email: emailAddress }
        });
        
        if (!user) {
            return NextResponse.json(
                {
                    message: "User does not exist!",
                    success: false
                },
                {
                    status: 404
                }
            );
        }

        if (user.userType == "admin") {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return NextResponse.json(
                    {
                        message: "Incorrect password! this is a Admin account!",
                        success: false
                    },
                    {
                        status: 403
                    }
                );
            }
        }else{
            const passwordIsCorrect = password === user.password;
            if (!passwordIsCorrect) {
                    return NextResponse.json(
                        {
                            message: "Incorrect password!",
                            success: false
                        },
                        {
                            status: 403
                        }
                    );
            }
        }
        
        const token = createToken(user.id);

        const responce =  NextResponse.json(
            {
                message: "Login successful!",
                success: true,
                userType: user.userType
            },
            {
                status: 200
            }
        );
        responce.cookies.set("idmsq",token,{httpOnly:true,maxAge:  2 * 24 * 60 * 60,sameSite: 'strict',secure:true})

        return responce;

    } catch (error) {
        console.error("Error during authentication:", error);
        return NextResponse.json(
            {
                message: "Internal server error.",
                success: false
            },
            {
                status: 500
            }
        );
    } finally {
        prismaDB.$disconnect();
    }
}
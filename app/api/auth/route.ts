import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { createToken } from "@/lib/session";
import { cookies } from "next/headers";

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

        const token = await createToken(
            {
                id:user.id,
                role: user.userType
            }
        );

        const responce =  NextResponse.json(
            {
                message: "Login successful!",
                success: true,
                userType: user?.userType
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

export async function DELETE(req: NextRequest) {
    try {
        const cookie = await cookies();
        if (!cookie?.has('idmsq')) {
            return NextResponse.json(
                {
                    message: "You are already not logined",
                    success: false
                },{
                    status: 500
                }
            )
        }
        const token = cookie?.set('idmsq',"")
        console.log(token)

        return NextResponse.json(
            {
                message: "Logged out successfully!",
                success: true
            },{
                status:200
            }
        )
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Server Problem!",
                success: false
            },{
                status: 500
            }
        )
    }
}
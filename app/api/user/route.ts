import { verifyToken } from "@/lib/session"
import prismaDB from "@/prisma/pot";
import { NextResponse } from "next/server";

export async function POST(){}

export async function GET(){
    try {
        const cookie = await verifyToken();

        if (!cookie) {
            return NextResponse.json(
                {
                    message: "You are already not logined",
                    success: false
                },
                {
                    status: 401
                }
            );
        }

        const user = await prismaDB.user.findUnique({
            where: {
                id: cookie.id as string
            }
        })
        if (!user) {
            return NextResponse.json(
                {
                    message: "Your account is not founded",
                    success: false
                },
                {
                    status: 404
                }
            );
        }



        return NextResponse.json(
            {
                message: "Hear is your user information!",
                success: true,
                user:""
            },
            {
                status: 201
            }
        );
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "This error is from the server",
                success: false
            },
            {
                status: 500
            }
        );
    }
}
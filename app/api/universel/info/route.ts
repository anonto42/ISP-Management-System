import { isAdmin } from "@/lib/session"
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const admin = await isAdmin();
        if (!admin) {
            return NextResponse.json(
                {
                    message: "You are not allowed to access this route!",
                    success: false
                },
                {
                    status: 401
                }
            );
        }
        const { user_id } = await req.json();
        if (!user_id.trim()) {
            return NextResponse.json(
                {
                    message: "Paramiter is not a valid user identifier!",
                    success: false
                },
                {
                    status: 404
                }
            );
        }

        const user = await prismaDB.user.findUnique({
            where: {
                userName: user_id
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
                user
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
    }  finally {
        await prismaDB.$disconnect();
    }
}
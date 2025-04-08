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
        const { userName } = await req.json();
        if (!userName.trim()) {
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

        const history = await prismaDB.transaction.findMany({
            where: {
                userName
            }
        })
        if (!history) {
            return NextResponse.json(
                {
                    message: "Your transaction is not founded",
                    success: false
                },
                {
                    status: 404
                }
            );
        }



        return NextResponse.json(
            {
                message: "Hear is your transaction information!",
                success: true,
                history
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
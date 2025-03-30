import { verifyToken } from "@/lib/session";
import prismaDB from "@/prisma/pot";
import { NextResponse } from "next/server";



export async function POST() {
    try {
        const deCodedValue = await verifyToken();
        if (!deCodedValue) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Login!"
                },{
                    status: 400
                }
            )    
        }
        
        const user = await prismaDB.user.findUnique({
            where:{id:deCodedValue}
        });
        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "user not found!"
                },{
                    status: 405
                }
            )  
        }

        return NextResponse.json(
            {
                success: true,
                user
            },{
                status: 200
            }
        )
    } catch (error) {
        console.log(error);
    }
}
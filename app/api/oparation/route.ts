import dynamicSchema from "@/lib/dynamicSchema";
import { isAdmin } from "@/lib/session"
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const isValid = await isAdmin();
        if (!isValid) {
            return NextResponse.json(
                {
                    message:"You are not authorize to inter this route!",
                    success:false
                },{
                    status:355
                }
            )
        };
        const { schemaName } = await req.json();
        if (!schemaName.trim()) {
            return NextResponse.json(
                {
                    message:"You must give a valid schema name!",
                    success:false
                },{
                    status:404
                }
            )
        };

        const data = await dynamicSchema(schemaName.trim());
        if (!data) {
            return NextResponse.json(
                {
                    message:"Somthing was problem on the Promis!",
                    success:false
                },{
                    status:505
                }
            )
        }
        
        return NextResponse.json(
            {
                message:"Successful query the data",
                success:true,
                data
            },{
                status:200
            }
        )

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"Somting was wrong on the server!",
                success:false
            },{
                status:500
            }
        )
    } finally {
        await prismaDB.$disconnect();
    }
}
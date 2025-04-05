import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { name, serverLink } = await req.json();
      
        if (!name.trim() || !serverLink.trim()) {
            return NextResponse.json({
                message: "all fields are required!",
                success: false
            });        
        }

        const res = await prismaDB.servers.create(
            {
                data:{
                    name,
                    url: serverLink,
                    status: "success"
                }
            }
        )
        if (!res) {
            return NextResponse.json({
                message: "Server created successfully!",
                success: false
            });    
        }

        return NextResponse.json({
            message: "Server created successfully!",
            success: true
        });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create server!",
            success: false
        });
    };
};
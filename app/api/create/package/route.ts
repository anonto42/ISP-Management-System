import { isAdmin } from "@/lib/session";
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const isExist = await isAdmin();
        if (!isExist) {
            return NextResponse.json(
                {
                    message:"You are not authorized to access this api!",
                    success: false
                },{
                    status:350
                }
            )
        };

        const { title, price, mbps } = await req.json();
        if (!title.trim() || !price.trim() || !mbps.trim()) {
            return NextResponse.json(
                {
                    message: "All fields are requird!",
                    success: false
                },{
                    status: 500
                }
            )
        };

        const data = {
            title: title.trim(),
            price: Number(price.trim()),
            mbps: Number(mbps.trim())
        };

        const packages = await prismaDB.packages.create({
            data
        })
        if (!packages) {
            return NextResponse.json(
                {
                    message: "Package was't create!",
                    success: false
                },{
                    status: 305
                }
            )
        }

        return NextResponse.json(
            {
                message: "Created the package!",
                success: true,
                data
            },{
                status: 200
            }
        );
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Some problem on the server!",
                success: false
            },{
                status: 500
            }
        );
    } finally{
        await prismaDB.$disconnect();
    }
}
import { isAdmin } from "@/lib/session"
import { deleteRecord } from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){
    try {
        const ISadmin = isAdmin();
        if (!ISadmin) {
            return NextResponse.json(
                {
                    message: "You are not authorized to access this route!",
                    success: false
                },
                {
                    status: 401
                }
            )
        };

        const { id, modelName } = await req.json();
        if (!id.trim() || !modelName.trim()) {
            return NextResponse.json(
                {
                    message: "All fields are requird",
                    success: false
                },{
                    status:404
                }
            )
        };

        const data = await deleteRecord(modelName,id);
        
        if (!data) {
            return NextResponse.json(
                {
                    message: "Problems deleting the element!",
                    success: false
                },{
                    status:300
                }
            )
        }

        return NextResponse.json(
            {
                message: "Element deleted successfully!",
                success: true
            },{
                status:200
            }
        )

        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "This is an server error chack all think!",
                success: false
            },{
                status:500
            }
        )
    }
}
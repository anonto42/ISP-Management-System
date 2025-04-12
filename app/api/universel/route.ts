import { ConnectMikroTik } from "@/lib/connectMikroTik";
import { isAdmin } from "@/lib/session"
import prismaDB, { deleteRecord } from "@/prisma/pot";
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


        const { id, modelName, userName } = await req.json();
        if (!id.trim() || !modelName.trim() || !userName.trim()) {
            return NextResponse.json(
                {
                    message: "All fields are requird",
                    success: false
                },{
                    status:404
                }
            )
        };

        if(modelName === "user"){
            const router = await ConnectMikroTik();
            if (!router) {
                return NextResponse.json(
                    {
                        message:"Mickrotik is not connected",
                        success:false
                    },{
                        status:360
                    }
                )
            }
            await router.connect();
    
            const findUser = await router.write("/ppp/secret/print");
            const user = findUser.filter( users => users.name === userName )[0];
            if (!user) {
                await router.close();
                return NextResponse.json(
                    {
                        message:"User Not Found on mickrotik!",
                    },
                    {
                        status:404
                    }
                )
            }
            
            await router.write("/ppp/secret/remove",[
                `=.id=${user[".id"]}`
              ])
    
            await router.close();
        }

        
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
    }  finally {
        await prismaDB.$disconnect();
    }
}
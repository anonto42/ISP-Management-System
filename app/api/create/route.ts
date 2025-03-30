import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            extraNumber,
            nid,
            district,
            upozala,
            area,
            houseNo,
            floorNo,
            connectivityType,
            change,
            wireCode,
            wireType,
            userName,
            password,
            remark,
            reseller,
            securityDeposit,
            dateOfConnection,
            interNetPackage,
            userType
        } = await req.json();
        // we will get a image named: picture

        const allData = {
            fullName,
            email,
            phoneNumber,
            extraNumber,
            nid,
            district,
            upozala,
            area,
            houseNo,
            floorNo,
            connectivityType,
            change,
            wireCode,
            wireType,
            userName,
            password,
            remark,
            reseller,
            securityDeposit,
            dateOfConnection,
            interNetPackage,
            userType
        }

        const isExist = await prismaDB.user.findUnique({where:{userName}});
        if (isExist) {
            return NextResponse.json(
                {
                    message: "User already exists on user name: "+userName,
                    success: true
                }, {
                status: 200
            }
            )
        }

        const user = await prismaDB.user.create({
            data:allData
        })

        return NextResponse.json(
            {
                message: "Done POST",
                success: true,
                data:user
            }, {
            status: 200
        }
        )

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Internal Server Error!",
                success: false
            }, {
            status: 500
        }
        )
    } finally {
        prismaDB.$disconnect()
    }
}
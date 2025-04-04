import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        // we will get a image named: picture
        if (!formData) {
            return NextResponse.json(
                {
                    message: "No form data!",
                    success: false
                }, {
                status: 400
            }
            )
        }

        const userName = formData.get("userName") as string;
        const email = formData.get("email") as string;
        const phoneNumber = formData.get("phoneNumber") as string;
        const fullName = formData.get("fullName") as string;
        const extraNumber = formData.get("extraNumber") as string;
        const interNetPackage = formData.get("interNetPackage") as string;
        const district = formData.get("district") as string;
        const upozala = formData.get("upozala") as string;
        const area = formData.get("area") as string;
        const houseNo = formData.get("houseNo") as string;
        const floorNo = formData.get("flooreNo") as string;
        const password = formData.get("password") as string;
        const dateOfConnection = formData.get("dateOfConnection") as string;
        const connectivityType = formData.get("connectivityType") as string;
        const referral = formData.get("referral") as string;
        const wireCode = formData.get("wireCode") as string;
        const wireType = formData.get("wireType") as string;
        const reseller = formData.get("reSeller") as string;
        const securityDeposit = formData.get("securityDeposit") as string;
        const nid = formData.get("nid") as string;
        const picture = formData.get("picture") as string;

        console.log({ userName, email, phoneNumber, fullName, extraNumber, interNetPackage, district, upozala, area, houseNo, floorNo, password, dateOfConnection, connectivityType, referral, wireCode, wireType, reseller, securityDeposit, nid, picture })


        const allData = { userName, email, phoneNumber, fullName, extraNumber, interNetPackage, district, upozala, area, houseNo, floorNo, password, dateOfConnection, connectivityType, referral, wireCode, wireType, reseller, securityDeposit, nid, picture }

        const isExist = await prismaDB.user.findUnique({ where: { userName } });
        if (isExist) {
            return NextResponse.json(
                {
                    message: "User already exists on user name: " + userName,
                    success: true
                }, {
                status: 200
            }
            )
        }

        await prismaDB.user.create({
            data: allData
        })

        return NextResponse.json(
            {
                message: "User created successfully!",
                success: true
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
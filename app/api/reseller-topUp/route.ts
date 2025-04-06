import { verifyToken } from "@/lib/session";
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    try {
        const auth = await verifyToken();
        if (!auth) {
            return NextResponse.json(
                {
                    message: "You are not authorized to access this route!",
                    success: false
                }, {
                    status: 401
                }
            )
        };

        const { userName, amount, date } = await req.json();
        if (!userName ||!amount ||!date) {
            return NextResponse.json(
                {
                    message: "All fields are required!",
                    success: false
                },{
                    status:404
                }
            )
        };

        const isReselerExist = await prismaDB.user.findUnique({where:{userName: userName}});
        if (!isReselerExist) {
            return NextResponse.json(
                {
                    message: "Reseler not exist!",
                    success: false
                }, {
                    status: 404
                }
            )
        };

        await prismaDB.transaction.create({
            data: {
                amount: Number(amount),
                date: date,
                methordName: "Hand Cash",
                puspes: "Reseller paymet",
                transactionType: "income",
                userName: userName.trim()
            }
        })

        await prismaDB.user.update({
            where: { userName: userName },
            data: { 
                balance: amount.trim()
             }
        })

        return NextResponse.json(
            {
                message: "Top-Up and Income added successfully!",
                success: true
            },
            {
                status: 200
            }
        )
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "somethik was error on the server",
                success: false
            }, {
                status: 501
            }
        )
        
    }
}
import prismaDB from "@/prisma/pot";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    try {
        const { amount, type, purpes, date, receved, userName } = await req.json();
        if (!amount || !type.trim() || !purpes.trim() || !date.trim) {
            return NextResponse.json(
                {
                    message: "All fields are required!",
                    success: false
                },{
                    status:404
                }
            )      
        }
        
        const data = await prismaDB.transaction.create({
            data:{
                amount:amount,
                methordName:receved.trim(),
                puspes:purpes.trim(),
                date: new Date(date),
                transactionType:type.trim(),
                userName
            }
        })
        if (!data) {
            return NextResponse.json(
                {
                    message: "Somthing failed!",
                    success: false
                },{
                    status:500
                }
            ) 
        }
        
        return NextResponse.json(
            {
                message: "Transaction recorded successfully!",
                success: true
            },{
                status:200
            }
        ) 
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Server error",
                success: false
            },{
                status: 500
            }
        ) 
    }
}
import { NextRequest, NextResponse } from "next/server";
import { connectToDataBase } from "@/DB/db";
import User from "@/models/User.model";

export async function POST(req : NextRequest){
    try {
        const { email , password } = await req.json();
        if(!email || !password){
            return NextResponse.json(
                { error : "Email and password are required" },
                { status : 400 }
            )
        }

        await connectToDataBase();

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return NextResponse.json(
                { error : "Email is already registerd" },
                { status : 400 }
            );
        }

        await User.create(
            {
                email,
                password
            }
        );

        return NextResponse.json(
            { message : "User registered successfully" },
            { status : 201 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: "Faild to register User"},
            { status: 500 }
        )
    }
}
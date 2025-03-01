import { NextRequest, NextResponse } from "next/server";


export default async function handler(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        
    } catch (error) {
        return NextResponse.json(
            { error: "Faild to register User"},
            { status: 500 }
        )
    }
}
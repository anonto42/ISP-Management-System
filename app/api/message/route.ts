import { NextRequest, NextResponse } from "next/server";
import Twilio from "twilio";


export async function POST (req: NextRequest){
    try {
        const { number , message } = await req.json();
        if (!number.trim() || !message.trim()) {
            return NextResponse.json({
                message:"All fields are required!",
                success: false
            },{
                status:420
            }) 
        }
        const sender = Twilio(process.env.TWILIO_AUTH_SID,process.env.TWILIO_AUTH_TOKEN);

        sender.messages
            .create(
                {
                    body: message.trim(),
                    to: `+88${number.trim()}`,
                    from: process.env.TWILIO_PHONE_NUMBER
                }
            )
            .then( res => {
                console.log(res)
                return NextResponse.json({
                data:res.body
            },{
                status:200
            }
        )
        })

        return NextResponse.json({
            message:"Message sent successfully",
            success: true
        },{
            status:200
        });
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false,message:"This is an server error chack all think!"},{status:500})
    }
}
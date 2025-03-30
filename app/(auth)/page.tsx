"use server"
import Auth from "./Auth"
import { getUser } from "@/lib/session"
import { redirect } from "next/navigation";

const Login = async () => {
    
    const User = await getUser();
    if (!User) {
        console.log("user not found!")
    }
    if (( User as { userType:string }).userType !== "admin") {
        redirect("/admin")
    }else if (( User as { userType:string }).userType !== "user"){
        redirect("/user")
    }

    return (
        <div className='w-full h-svh flex justify-center items-center'>
            <Auth />
        </div>
    )
}

export default Login
"use server"
import Auth from "./Auth"
import { getUser } from "@/lib/session"
import { redirect } from "next/navigation";

const Login = async () => {
    
    const User = await getUser();
    if (User.userType == "admin") {
        redirect("/admin")
    }else if ( User.userType == "user"){
        redirect("/user")
    }else{
        console.log("user not found!")
    }

    return (
        <div className='w-full h-svh flex justify-center items-center'>
            <Auth />
        </div>
    )
}

export default Login
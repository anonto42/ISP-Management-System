import { verifyToken } from "@/lib/session";
import Auth from "./Auth"
import { redirect } from "next/navigation";

const Login = async () => {

    const session = await verifyToken();
    const isAdmin = session? session.role === "admin" : false;
    const user = session? session.role === "user" : false;
    if(isAdmin){
       redirect("/admin");
    } else if (user) {
       redirect("/user");
    }


    return (
        <div className='w-full h-svh flex justify-center items-center'>
            <Auth />
        </div>
    )
}

export default Login
import { DefaultSession } from "next-auth";

export declare module "next-auth"{
    interface Session{
        user:{
            id: String;
        } & DefaultSession["user"];
    }
}
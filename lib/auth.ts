import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { connectToDataBase } from "@/DB/db";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";


export const authOptions: NextAuthConfig = {
    providers:[
        CredentialsProvider(
            {
                name:"Creadentials",
                credentials:{
                    email:{label:"Email",type:"text"},
                    password:{label:"Password",type:"password"}
                },
                async authorize(credentials){

                    if(!credentials?.email || !credentials?.password ){
                        throw new Error("Missing credentials");
                    };

                    try {

                        await connectToDataBase();

                        const user = await User.findOne({ email: credentials.email });

                        if (!user) {
                            throw new Error("User not found");
                        };

                        const isValid = await bcrypt.compare(
                            credentials.password.toString(),
                            user.password
                        );

                        if (!isValid) {
                            throw new Error("Invalid password");
                        };

                        return {
                            userId: user._id.toString(),
                            email: user.email,
                        };

                    } catch (error) {
                        return new Error();
                    }

                }
            }
        )
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user.id;
            }
            return token;
        },
        async session({session,token}){
            if(session.user){
                session.user.id = token.id as string;
            }
            return session;
        }
    },
    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    },
    pages:{
        signIn:"/auth",
        signOut:"/auth"
    },
    secret:process.env.NEXTAUTH_SECRET
};
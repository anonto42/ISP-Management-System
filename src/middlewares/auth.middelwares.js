import { Admin } from "../model/admin.model.js";
import asyncHendler from "../util/asyncHendler.js";
import jwt from 'jsonwebtoken';



export const verifyJWT  = asyncHendler( async ( req , _ , next ) => {
    
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        if(!token) return res.status(401).json({message:"Unauthorized"});
    
        const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);
    
        const user = await Admin.findById(decodedToken?._id).select( "-password" );
    
        if (!user) return res.status(401).json({message:"invalid access token"});
    
        req.user = user;
        next();

    } catch (error) {
        throw error;
    }
} )
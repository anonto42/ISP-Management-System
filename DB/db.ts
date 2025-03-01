import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_URI!;

if (!MONGODB_URI) throw new Error("Please define mongodb uri in env file");

let cached = global.mongoose;

if( !cached ) {
    cached = global.mongoose = { conn: null , promise: null };
}

export async function connectToDataBase(){

    if(cached.conn){
        return cached.conn
    };

    if(!cached.promise){
        const opts = {
            bufferCommands: true,
            maxPoolSize:10
        }   
        
        cached.promise = mongoose
        .connect(MONGODB_URI, opts)
        .then( ()=> mongoose.connection );
    };

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw new Error("Check the db file!");
    };

    return cached.conn;
}


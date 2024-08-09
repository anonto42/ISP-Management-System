import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import adminRouter from './routes/admin.routes.js';

const app = express();

// This name is for the database collection 
const DB_NAME = "Porthfolio";

// configuration of dotenv
dotenv.config();

// cors configuration
app.use(cors(
    {
        origin : process.env.CORS_ORIGIN
    }
))

// The express dataPas with body
app.use(express.json({limit:"5kb"}));
app.use(express.urlencoded({ extended: true , limit:"15kb" }));

// In this line I have done the route connection
app.use("/api/admin", adminRouter)

app.listen(process.env.PORT || 3500 , async ()=>{

    console.log(`Your server is listening at ${process.env.PORT}`);
    
    // I will connect the database in heare
    try {

        const dataBase = await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`);

        console.log(`Your database connection on ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log( "You have some problem on databas" & error.message);
        process.exit(1);
    };
});
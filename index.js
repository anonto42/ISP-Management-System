import express from 'express';
import dotenv from "dotenv";
import adminRouter from './src/routes/admin.routes.js';
import connectionDB from './src/DB/db.js';
import cors from "cors"; 
import cookieParser from 'cookie-parser';

const app = express();

// configuration of dotenv
dotenv.config();

// cors configuration
app.use(cors(
    {
        origin : process.env.CORS_ORIGIN
    }
))

// The express dataPas with body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("it's work")
})

// In this line I have done the route connection
app.use("/api/admin", adminRouter);

// I will connect the database in heare
connectionDB()
.then(()=>{
    app.listen(process.env.PORT || 3500 , ()=>{
    
        console.log(`Your server is listening at ${process.env.PORT || 3500}`);
    
    })
})
.catch(err => console.log(err.message));

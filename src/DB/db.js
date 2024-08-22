import mongoose from "mongoose";

const connectionDB = async ()=>{
    
    // I will connect the database in heare
    try {

        const dataBase = await mongoose.connect(`${process.env.MONGOOSE_URI}/${process.env.DB_NAME}`);

        console.log(`Your database connection on : ${dataBase.connection.host}`)

    } catch (error) {
        console.log( "You have some problem on databas" , error);
    };
};

export default connectionDB;
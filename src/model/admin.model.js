import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const adminSchima = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    projects:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }
},{
    timestamps: true,
});

// Used bcrypt for hashing the password
adminSchima.pre("save" , async function (next) {

    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash( this.password , 5 );

    next();

});

adminSchima.methods.isPasswordCorrect = async function(password){

    return await bcrypt.compare(password , this.password);

};

adminSchima.methods.generateAccesToken = function(){

    return jwt.sign(
        {
            _id : this._id,
            email : this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )

};

export const Admin = mongoose.model("Admin", adminSchima);
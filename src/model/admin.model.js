import mongoose from "mongoose";

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

export const Admin = mongoose.model("Admin", adminSchima);
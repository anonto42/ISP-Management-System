import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true
    },
    liveLink:{
        type : String,
        required: true
    },
    sorceCode:{
        type : String,
        required: true
    },
    frontImage:{
        type : String,
        required: true
    }
},{timestamps:true});

export const Project = mongoose.model('Project',projectsSchema);
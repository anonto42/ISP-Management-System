import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
    title:{
        type : 'string',
        required: true
    },
    liveLink:{
        type : 'string',
        required: true
    },
    sorceCode:{
        type : 'string',
        required: true
    },
    frontImage:{
        type : 'string',
        required: true
    }
},{timestamps:true});

export const Project = mongoose.model('Project',projectsSchema);
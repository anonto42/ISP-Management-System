import mongoose from "mongoose";

const Message = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps:true
});

const MessageModel = mongoose.model('Message',Message);

export default MessageModel;
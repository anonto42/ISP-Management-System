import { Admin } from '../model/admin.model.js';
import MessageModel from '../model/messages.model.js';
import { Project } from '../model/project.model.js';
import asyncHendler from '../util/asyncHendler.js';
import { uploadOnCloudinary } from '../util/cloudnary.js';

const register = asyncHendler( async (req , res )=>{
    
    const { name , email , password , role } = req.body;

    if( name === "" && email === "" && password === "" & role === "" ) return res.status(401).json({message:"Please fulfill the from"});

    const userExid = await Admin.findOne({email});

    if(userExid) return res.status(400).json({ message: "Email already exists" });

    const creatUser = await Admin.create(
        {
            name,
            email,
            password,
            role
        }
    );

    const createdUser = await Admin.findById(creatUser._id)

    if(!createdUser) return res.status(400).json({message:"your user was not created" });

    return res.status(201).json({message:"User created",data:createdUser});
});

const projectUpload = asyncHendler( async (req,res)=>{

    const { title , liveLink , sorceCode } = req.body;

    if(
        [title , liveLink , sorceCode].some((e)=>e?.trim() === "" ) 
    ) return res.status(401).json({message:"please enter your all project information"});
    
    const frontImageTst = req.file?.path;
    // const frontImageTst = req.file?.frontImage?.path;

    const uploadOnClou = await uploadOnCloudinary(frontImageTst);

    if(!uploadOnClou) return res.status(500).json({message:"your file was not uploaded"})

    const frontImage = uploadOnClou.url

    const project = await Project.create(
        {
            title,
            liveLink,
            sorceCode,
            // frontImage : frontImageFile.url
            frontImage
        }
    );

    const projectCreated = await Project.findById(project._id);

    if(!projectCreated) return res.status(400).json({message:"your project was not created"});
    
    return res.status(201).json({message:"project created", data:projectCreated});

});

const messageCreate = asyncHendler( async (req, res)=>{

    const { name , email , message } = req.body;

    if( 
        [name, email, message].some( e => e.trim() === "" )
    ) return res.status(404).json({message:"Please enter your all information"});

    const messageCreate = await MessageModel.create(
        {
            name,
            email,
            message
        }
    );

    if (!messageCreate) return res.status(405).json({message:"Your message is not send"});

    return res.status(201).json({message:"Message send", data:messageCreate});
 
});

// GenerateAccesToken
const generateAccesToken = async ( userID )=> {
    
    const user = await Admin.findById(userID);

    if(!user) return null;

    const AccessToken = await user.generateAccesToken();

    return AccessToken;
};

const login = asyncHendler( async (req,res)=>{
    
    const { email , password } = req.body;
    
    if( email === "" && password === "" ) return res.status(401).json({message:"Please fulfill the from"});

    const userGotit = await Admin.findOne({email});

    if(!userGotit) return res.status(400).json({message:"There was not any account by this email address"});

    const passTrueOrFalse = await userGotit.isPasswordCorrect(password);

    if (!passTrueOrFalse) return res.status(401).json({message:"Your password was not correct"});

    const { AccessToken } = await generateAccesToken(userGotit._id);

    const logindUser = await Admin.findById(userGotit._id);

    const option = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(222)
    .cookie("accessToken" , AccessToken , option )
    .json(
        {
            user: logindUser , AccessToken
        },
        "User logged in Succesfully"
    )
});

const logout = asyncHendler( async (req,res)=>{

    const options = {
        httpOnly: true,
        secure: true
    }
    
    return res
    .status(222)
    .clearCookie("accessToken", options)
    .json(
        {
            message: "User logged out Succesfully"
        }
    );
});

const getProjects = asyncHendler( async (req,res)=>{

    const projects = await Project.find();

    res.status(200).json(projects)
});

const getMessage = asyncHendler( async (req,res)=>{
    
    const messages = await MessageModel.find();

    res.status(200).json(messages);

});

const deleteProjects = asyncHendler( async (req,res)=>{
    
    const { title } = req.body;

    const projectFileOnDB = await Project.findOneAndDelete( { title } );
    
    if(!projectFileOnDB) return res.status(404).json({ message:"Project not found or your given title was rong"});

    return res.status(200).json({ message:"Message deleted. Please refresh the page." , data: projectFileOnDB })
} );

const deleteMessage = asyncHendler( async (req,res)=>{

    const { email } = req.body;

    const messageFileOnDB = await MessageModel.findOneAndDelete( { email } );
    
    if(!messageFileOnDB) return res.status(404).json({ message:"Message not found or your given email was rong"});

    return res.status(200).json({ message:"Message deleted. Please refresh the page." , data: messageFileOnDB })
} );


export { register , projectUpload , getProjects , login , messageCreate , getMessage , logout , deleteProjects , deleteMessage };
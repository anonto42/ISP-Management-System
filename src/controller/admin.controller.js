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

    const uploadOnClou = await uploadOnCloudinary(frontImageTst);

    if(!uploadOnClou) return res.status(500).json({message:"your file was not uploaded"})

    const frontImage = uploadOnClou.url

    const project = await Project.create(
        {
            title,
            liveLink,
            sorceCode,
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
    
    const { token  } = req.body;
    
    if( token === "" ) return res.status(401).json({message:"Please inter the token"});

    if (token != process.env.TOKEN) return res.status(401).json({message:"Please inter the valid token"});

    return res
    .cookie("logg", { token } , { httpOnly: true, secure: true })
    .status(200)
    .json(
        {
            message: "User logged in Succesfully"
        }
    )
});

const logout = asyncHendler( async (req,res)=>{

    const options = {
        httpOnly: true,
        secure: true
    }

    const token = ""
    
    return res
    .status(222)
    .cookie("logg", { token } , options)
    .json(
        {
            message: "User logged out Succesfully"
        }
    );
});

const getProjects = asyncHendler( async (req,res)=>{

    const projects = await Project.find();

    res.status(200).json(projects.reverse())
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
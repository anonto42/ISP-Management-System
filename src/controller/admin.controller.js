import { Admin } from '../model/admin.model.js';
import { Project } from '../model/project.model.js';
import asyncHendler from '../util/asyncHendler.js';

const register = asyncHendler( async (req , res )=>{
    
    const { name , email , password , role } = req.boy;

    if(
        [name, email, password , role].some( e => e?.trim() === '' )
    ) return res.status(401).json({message:"Please fulfill the from"});

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

    const createdUser = await Admin.findById(creatUser._id).setect("-pasword");

    if(!createdUser) return res.status(400).json({message:"your user was not created" });

    return res.status(201).json({message:"User created"});
});

const projectUpload = asyncHendler( async (req,res)=>{

    const { title , liveLink , sorceCode } = req.boy;

    const frontImage = req.file?.frontImage[0]?.path;

    if(
        [title , liveLink , sorceCode].some(e=>e?.trim() === "" ) 
    ) return res.status(401).json({message:"please enter your all project information"});

    if (!frontImage) return res.status(401).json({message:"You are facing the problem in loading the Image"});

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

export { register , projectUpload };
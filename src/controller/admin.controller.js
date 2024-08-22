import { Admin } from '../model/admin.model.js';
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

    console.log(uploadOnClou)

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


export { register , projectUpload };
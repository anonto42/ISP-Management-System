import { Admin } from '../model/admin.model.js';
import asyncHendler from '../util/asyncHendler.js';

const register = asyncHendler( async (req , res )=>{
    
    const { name , email , password , role } = req.boy;

    if(
        [name, email, password , role].some( e => e === 'admin' )
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

    if (!creatUser) return res.status(404).json({ message: "user not created" });


});

export { register };
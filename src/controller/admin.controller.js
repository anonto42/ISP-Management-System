import asyncHendler from '../util/asyncHendler.js';

const register = asyncHendler( async (req , res )=>{
    res.status(200).json({
        message: "success"
    })
})

export { register }
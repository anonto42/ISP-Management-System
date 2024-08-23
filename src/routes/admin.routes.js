import express from 'express';
import { register , projectUpload , getProjects , login , messageCreate , getMessage , logout , deleteMessage , deleteProjects } from '../controller/admin.controller.js';
import { upload } from '../middlewares/uploadImage.middlewares.js';
import { verifyJWT } from '../middlewares/auth.middelwares.js';

const adminRouter = express.Router();

adminRouter.post( "/register" , register );

adminRouter.post( "/uploadImage" , upload.single("frontImage") , projectUpload );

adminRouter.post( "/messageSend" , messageCreate );


adminRouter.get( "/getProjecs", getProjects );

adminRouter.get( "/getMessages" , getMessage );

// delete routes
adminRouter.post("/deleteProject", deleteProjects );

adminRouter.delete("/deleteMessage" , deleteMessage );


// secout routes
adminRouter.post( "/login" , login );

adminRouter.post("/logout", verifyJWT , logout)


export default adminRouter;
import express from 'express';
import { register , projectUpload , getProjects , login , messageCreate , getMessage } from '../controller/admin.controller.js';
import { upload } from '../middlewares/uploadImage.middlewares.js';

const adminRouter = express.Router();

adminRouter.post( "/register" , register );

adminRouter.post( "/uploadImage" , upload.single("frontImage") , projectUpload );

adminRouter.post( "/messageSend" , messageCreate );

adminRouter.get( "/login" , login );

adminRouter.get( "/getProjecs", getProjects );

adminRouter.get( "/getMessages" , getMessage );

export default adminRouter;
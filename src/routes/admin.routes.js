import express from 'express';
import { register , projectUpload } from '../controller/admin.controller.js';
import { upload } from '../middlewares/uploadImage.middlewares.js';

const adminRouter = express.Router();

adminRouter.post("/register" , register);

// adminRouter.post("/uploadImage" , upload.single({name:"frontImage"}) , projectUpload );
adminRouter.post("/uploadImage" , upload.fields([{name:"frontImage",maxCount:1}]) , projectUpload );

export default adminRouter
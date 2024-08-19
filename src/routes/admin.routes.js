import express from 'express';
import { adminController , photoUpload } from '../controller/admin.controller.js';
import { upload } from '../middlewares/uploadImage.middlewares.js';

const adminRouter = express.Router();

adminRouter.get("/:id", adminController); // this route is for admin tasting

adminRouter.post("/uploadPhoto", upload ,photoUpload ) // this route will upload photos


export default adminRouter
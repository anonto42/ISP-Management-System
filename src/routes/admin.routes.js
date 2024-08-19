import express from 'express';
import { register} from '../controller/admin.controller.js';
import { upload } from '../middlewares/uploadImage.middlewares.js';

const adminRouter = express.Router();

adminRouter.post("/register", register);

// adminRouter.route("/ami").post(upload);

export default adminRouter
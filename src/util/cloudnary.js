import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


;(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
});


const uploadOnCloudinary = async (LocalFileImageOrVideo) =>{
    try {
        if(!localFileImageOrVideo) return null;

        const response = await cloudinary.uploader.upload(LocalFileImageOrvideo,{
            resource_type:"auto"
        });

        return response.url;

    } catch (error) {
        fs.unlinkSync(LocalFileImageOrVideo);
        return null && error.message ;
    }
}


export { uploadOnCloudinary };
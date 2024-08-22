import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


;(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
});


const uploadOnCloudinary = async (LocalFileImageOrVideo) =>{
    try {
        if (!LocalFileImageOrVideo) return null

        console.log(LocalFileImageOrVideo)

        //upload the file on cloudinary

        // const response = await cloudinary.uploader.upload(LocalFileImageOrVideo, {
        //     resource_type: "auto"
        // })

        const response = await cloudinary.uploader.upload(LocalFileImageOrVideo,
            {
                resource_type:"auto"
            }
        )

        fs.unlinkSync(LocalFileImageOrVideo)
        console.log(response.url);

        return response;

    } catch (error) {
        fs.unlinkSync(LocalFileImageOrVideo);
        return null && error.message ;
    }
}


export { uploadOnCloudinary };
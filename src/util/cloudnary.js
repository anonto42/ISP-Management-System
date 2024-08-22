import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


;(function() {
    // Configuration
    // cloudinary.config({ 
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    //     api_key: process.env.CLOUDINARY_API_KEY, 
    //     api_secret: process.env.CLOUDINARY_API_SECRET
    // });

    cloudinary.config({ 
        cloud_name: 'ddsnont4o', 
        api_key: '711779614851591', 
        api_secret: 'x68yEMTpaY0pyrLXDHKZHv-XCQk'
    });

})();


const uploadOnCloudinary = async (LocalFileImageOrVideo) =>{
    try {
        if (!LocalFileImageOrVideo) return console.log("File is not come on cloudinary")

        const response = await cloudinary.uploader.upload(LocalFileImageOrVideo,
            {
                resource_type:"auto"
            }
        )
        .catch(err => console.error(err))

        if(!response) return console.log("File was not uploaded")

        fs.unlinkSync(LocalFileImageOrVideo)

        return response;

    } catch (error) {
        fs.unlinkSync(LocalFileImageOrVideo);
        return error ;
    }
}


export { uploadOnCloudinary };
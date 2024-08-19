import multer from "multer";

const multerFile = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null, "/tmp/my-uploads")
    },
    filename: function(req,file,cd){
        const uniqSuffix = Data.now() + "-" + Math.round(Math.random() * 1E9)
        cd(null, file.fieldname + "-" + uniqSuffix)
    }
});

const upload = multer( { storage: multerFile } ); 

export { upload };
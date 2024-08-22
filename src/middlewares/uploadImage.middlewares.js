// import multer from "multer";

// const multerFile = multer.diskStorage({
//     destination: function(req,file,cd){
//         cd(null, "/tmp/my-uploads")
//     },
//     filename: function(req,file,cd){
//         const uniqSuffix = Data.now() + "-" + Math.round(Math.random() * 1E9)
//         cd(null, file.fieldname + "-" + uniqSuffix)
//     }
// });

// const upload = multer( { storage: multerFile } ); 

// export { upload };


// import multer from "multer";
// import path from "path";

// const multerFile = multer.diskStorage({
//     destination: function(req, file, cd) {
//         // const uploadPath = path.join('F:', 'temp'); 
//         cd(null, `F:/BackEnd/main-porthfolio-backend/public/temp`);
//     },
//     filename: function(req, file, cd) {
//         const uniqSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
//         cd(null, file.fieldname + "-" + uniqSuffix + path.extname(file.originalname)); // Append the file extension
//     }
// });

// const upload = multer({ storage: multerFile });

// export { upload };

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
 const upload = multer({ 
    storage, 
})

export { upload}
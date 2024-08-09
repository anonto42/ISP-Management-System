// admin controller for test the controll
const adminController = (req,res)=>{
    if (req.body.email != "anontom90@gmail.com") return res.json("your are not a admin this page is not for you");
    res.json("this is the admin page . You are success to login the admin");
};

// photo upload function
const photoUpload = (req,res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    res.json({ message: "File uploaded successfully", fileName: req.file.filename });
};

const login = ( req , res ) => {
    
}

export { adminController , photoUpload  }
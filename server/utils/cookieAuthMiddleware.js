const jwt=require('jsonwebtoken');
require('dotenv').config();

const checkCookie=(req,res,next)=>{
    const token=req.cookies?.token;

    console.log(token);
    if(!token){
        console.log("Cookie not present");
        return next();
    }

    try{
        const decoded=jwt.verify(token,process.env.SECRET_SESSION);
        console.log(decoded);
        res.status(201).json({
            success:true,
            message:"Successfully logged in"
        });
    }
    catch(error){
        console.log(error);
        res.clearCookie('token');
        return res.status(500).json({
            success:false,
            message:"Some server side error"
        });
    }
}

module.exports=checkCookie;
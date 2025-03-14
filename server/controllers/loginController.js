const Users=require('../models/users.model');
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.login=async(req,res)=>{
    try{
        console.log("Cookie auth not satisfied");
        if(!req.body.email || !req.body.password){
            return res.status(420).json({
                success:false,
                message:"All fields are required"
            });
        }

        const user=await Users.findOne({email:req.body.email.toString()});
        if(!user){
            return res.status(200).json({
                success:false,
                message:"No such user.Please register"
            });
        }
        if(req.body.password === user.password){
            // req.session.user=user.username;

        const jwt_token=jwt.sign({email:req.body.email},process.env.SECRET_SESSION,
            {expiresIn: '1h'},
        );

        console.log("jwt token: ",jwt_token);
        res.cookie('token',jwt_token,{
            httpOnly:true,
            secure:false,
            sameSite:'lax',
            maxAge:3600000
        });

        return res.status(200).json({
            success:true,
            message:"User logged in successfully"
        });
        }
        else{
            res.status(200).json({
                success:false,
                message:"Incorrect email or password"
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(520).json({
            success:false,
            message:"Some server side error"
        });
    }
};
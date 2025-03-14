const jwt=require('jsonwebtoken');
require('dotenv').config();

const Users=require('../models/users.model');
const generateUserId=require('../utils/uniqueId');

exports.registerUser = async (req,res)=>{
    try{
        if(!req.body.username || !req.body.email || !req.body.password || !req.body.address 
            || !req.body.phoneNumber){
            return res.status(420).json({
                success:false,
                message:"All feilds are required"
            });
        }

        //all kinds of validation in client side

        const User={
            unique_identity:generateUserId(),
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            address:req.body.address,
            phoneNumber:req.body.phoneNumber
        }



        const response= await Users.create(User);

        // req.session.user=req.body.username;

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
            message:"User created successfully"
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Some server side error"
        });
    }
};
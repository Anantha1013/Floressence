const mongoose=require('mongoose');

const users=new mongoose.Schema(
    {
        unique_identity:{
            type:String,
            unique:true
        },
        username:{
            type:String,
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
        },
        phoneNumber:{
            type:String,
        },
        address:{
            type:String
        }
    },
    {
        timestamps:true
    }
);

const Users=new mongoose.model("Users",users);
module.exports=Users;

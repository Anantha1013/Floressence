const mongoose=require('mongoose');

const cart=new mongoose.Schema(
    {
        cart_identity:{
            type:String,
            unique:true
        },
        user_identity:{
            type:String
        },
        item_identity:{
            type:String
        },
        number_of_item:{
            type:Number
        }
    },
    {
        timestamps:true
    }
);

const Cart=new mongoose.model("Cart",cart);
module.exports={Cart};
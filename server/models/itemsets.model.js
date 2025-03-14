const mongoose=require('mongoose');

const flowers=new mongoose.Schema(
    {
        item_identity:{
            type:String,
            unique:true
        },
        name_item:{
            type:String,
        },
        price_per_item:{
            type:Number
        },
        Stock:{
            type:Number
        }
    }
);

const Itemset=new mongoose.model("Itemset",flowers);
module.exports={Itemset};
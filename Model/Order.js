import mongoose, { model } from "mongoose"


let orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    products:[{
        productId:String,
        quantity:{type:Number,default:1}
    }],
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:String,default:"Pending",required:true}
},{timestamps:true})

export default model("Order",orderSchema)
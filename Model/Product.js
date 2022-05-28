import mongoose, { model } from "mongoose"


let productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String,required:true},
    products:[{
        productId:String,
        quantity:{type:Number,default:1}
    }],
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:String,default:"Pending",required:true}
},{timestamps:true})

export default mongoose.model("Order",productSchema)
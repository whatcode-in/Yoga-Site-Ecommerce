import mongoose, { model } from "mongoose"


let orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    products:{type:Object,required:true},
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:String,default:"Pending",required:true}
},{timestamps:true})

export default mongoose.models.Order || model("Order",orderSchema)
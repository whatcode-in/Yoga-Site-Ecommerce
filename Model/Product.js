import mongoose from "mongoose"

let productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String,required:true},
    about:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:String,required:true},
    size:[String],
    color:[String],
    price:{type:Number,required:true},
    availableQty:{type:Number,default:0},
    stock:{type:Object,default:{}}
   
},{timestamps:true})

export default mongoose.models.Product || mongoose.model("Product",productSchema)
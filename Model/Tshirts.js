import mongoose from "mongoose"

let tshirtSchema=new mongoose.Schema({
    parent:{type:String,required:true},
    size:{type:String},
    color:{type:String},
    price:{type:Number,required:true},
    availableQty:{type:Number,required:true},
   img:{type:String}
},{timestamps:true})

export default mongoose.models.Tshirts || mongoose.model("Tshirts",tshirtSchema)
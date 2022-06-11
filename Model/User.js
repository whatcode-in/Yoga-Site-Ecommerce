import mongoose, { model } from "mongoose";
let addresSchema=new mongoose.Schema({
    housenumber:{type:Number,required:true},
    socity:{type:String,required:true},
    area:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:Number,required:true}
})
let userSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:addresSchema,required:true}
},{timestamps:true})


export default mongoose.models.Codeswearuser || model("Codeswearuser",userSchema)
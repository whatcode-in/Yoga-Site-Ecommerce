import mongoose, { model } from "mongoose";

let userSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:String,required:true}
},{timestamps:true})


export default model("User",userSchema)
import mongoose from "mongoose";

let connectdb=(handler)=>async (req,res)=>{
    if(mongoose.connections[0].readyState){
        
        return handler(req,res)
    }
    // await mongoose.connect("mongodb://localhost/bhyu")
    console.log("mongodb+srv://dipesh:dipesh@cluster0.uizroje.mongodb.net/test");
    mongoose.connect("mongodb+srv://dipesh:dipesh@cluster0.uizroje.mongodb.net/test",()=>{
        console.log("Connetcted to the Database");
    })
    return handler(req,res)
}

export default connectdb
import mongoose from "mongoose";

let connectdb=(handler)=>async (req,res)=>{
    if(mongoose.connections[0].readyState){
        
        return handler(req,res)
    }
    // await mongoose.connect("mongodb://localhost/bhyu")
    console.log(process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("Connetcted to the Database");
    })
    return handler(req,res)
}

export default connectdb
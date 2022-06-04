import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"


let  handler=async (req, res) =>{

    if(req.method==="POST"){
            let p=await Product.findByIdAndUpdate(req.body._id,req.body,{new:true})
        return res.status(200).json({ success:true ,product:p})
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
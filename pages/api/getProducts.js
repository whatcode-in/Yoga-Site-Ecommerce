import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"


let  handler=async (req, res) =>{
  // console.log(req.query);
    let products=await Product.find(req.query);
    res.status(200).json({ products })
  }
  

  
export default connectdb(handler)
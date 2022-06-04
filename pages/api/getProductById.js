import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"


let  handler=async (req, res) =>{
//   console.log("uuuuu",req.query);
    let product=await Product.findById(req.query.id);
    // console.log("herererererer",products);
    res.status(200).json({ product })
  }
  
export default connectdb(handler)
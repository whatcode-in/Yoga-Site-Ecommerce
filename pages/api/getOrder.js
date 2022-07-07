import connectdb from "../../Middleware/connectdb"
import Order from "../../Model/Order"
let  handler=async (req, res) =>{
        let order=await Order.findById(req.query.id);
        res.status(200).json({success:true, order })
      }
export default connectdb(handler)
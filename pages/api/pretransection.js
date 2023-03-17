
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectdb from "../../Middleware/connectdb"
import Order from "../../Model/Order"

let handler = async (req, res) => {
    if (req.method === "POST") {
        let order =await Order.create(req.body)
        console.log(order);
        return res.status(200).json({success:true,order})
    } else {
        return res.status(400).json({success:false, error: "this method is not allowed" })
    }
}

export default connectdb(handler)
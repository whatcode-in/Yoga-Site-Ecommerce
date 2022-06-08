import connectdb from "../../Middleware/connectdb"

import Tshirts from "../../Model/Tshirts"

let  handler=async (req, res) =>{
  // console.log(req.query);
    let tshirts=await Tshirts.find();
    console.log(tshirts);
    res.status(200).json(tshirts)
  }
  

  
export default connectdb(handler)
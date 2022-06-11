import connectdb from "../../Middleware/connectdb"
import User from "../../Model/User"


let  handler=async (req, res) =>{

    if(req.method==="POST"){
        let user=await User.findOne({"email":req.body.email})
        if (user) {
            if (user.password===req.body.password && user.email===req.body.email){
                return res.status(200).json({success:true,user})
            }
            return res.status(500).json({success:false,error:"Invalid credentials"})
        } else {
            return res.status(401).json({success:false,error:"No data found"})
        }
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
import connectdb from "../../Middleware/connectdb"
import User from "../../Model/User"
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


let  handler=async (req, res) =>{

    if(req.method==="POST"){
        let user=await User.findOne({"email":req.body.email})
        if (user) {
            if (CryptoJS.AES.decrypt(user.password, 'secret key 123').toString(CryptoJS.enc.Utf8)===req.body.password && user.email===req.body.email){
                const token = jwt.sign({email:user.email,password:user.password}, 'jwttoeknsecret');
               
                return res.status(200).json({success:true,user,token})
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
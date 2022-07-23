import { registerWithEmailAndPassword } from "../../firebaseconfig";
import connectdb from "../../Middleware/connectdb"
import User from "../../Model/User"
const CryptoJS = require("crypto-js");

let  handler=async (req, res) =>{

    if(req.method==="POST"){
        // console.log(req.body);
       let r= registerWithEmailAndPassword({
            fname:req.body.fname,
            lname:req.body.lname,
            name:req.body.fname+" "+ req.body.lname,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString(),
            address:req.body.address
        })
        // console.log(info);
        if (r){
            return res.status(200).json({ success:true })
        }
        return res.status(400).json({ success:false })
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)



import connectdb from "../../Middleware/connectdb"
import User from "../../Model/User"


let  handler=async (req, res) =>{

    if(req.method==="POST"){

        let addr=req.body.address.split(",");
        // console.log(req.body);
        let info=await User({
            fname:req.body.fname,
            lname:req.body.lname,
            name:req.body.fname+" "+ req.body.lname,
            email:req.body.email,
            password:req.body.password,
            address:{
                housenumber:addr[0],
                socity:addr[1],
                area:addr[2],
                city:addr[3],
                pincode:addr[4],
                state:addr[5]
            }
        })
        // console.log(info);
        await info.save()
        return res.status(200).json({ success:true ,user:info})
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
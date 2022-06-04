import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"


let  handler=async (req, res) =>{

    if(req.method==="POST"){
        for (let i=0;i<req.body.length;i++){
            let p=await Product.create({
                title:req.body[i].title,
                productId:req.body[i].productId,
                about:req.body[i].about,
                desc:req.body[i].desc,
                img:req.body[i].img,
                category:req.body[i].category,
                size:req.body[i].size,
                color:req.body[i].color,
                price:req.body[i].price,
                availableQty:req.body[i].availableQty,
                stock:req.body[i].stock
            })
            // await p.save();
        }
        return res.status(200).json({ success:true })
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
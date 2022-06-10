// import { set } from "mongoose";
import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"
import Item from "../../Model/Tshirts";


let  handler=async (req, res) =>{

    let result=null;
    if(req.method==="POST"){
        let parent=await Product.findById({_id:req.body[0].parent});
        // console.log(parent);
        for (let i=0;i<req.body.length;i++){
            let item=new Item({
                parent:req.body[i].parent,
                img:req.body[i].img,
                category:req.body[i].category,
                color:req.body[i].color,
                price:req.body[i].price,
                availableQty:req.body[i].availableQty
            })
            let newcolor=new Set(parent.color);
            newcolor.add(item.color)
            if(parent._doc.stock[item.color]!==undefined){
             parent._doc.stock.availableQty-=parent._doc.stock[item.color].availableQty
             parent._doc.availableQty-=parent._doc.stock[item.color].availableQty
            }
            // console.log(parent._doc.stock.availableQty)
            // console.log(item.availableQty)
            parent._doc.stock={...parent._doc.stock,[item.color]:{item:item._id,availableQty:item.availableQty,price:item.price,img:item.img},availableQty:(parent._doc.stock.availableQty!==undefined?parent._doc.stock.availableQty:0)+item.availableQty}
            let newproduct={...parent._doc,color:Array.from(newcolor),availableQty:parent._doc.availableQty+item.availableQty}

            console.log("hererere",newproduct);
            await item.save();
            result=await Product.findByIdAndUpdate(parent,newproduct,{new:true});
        }

        return res.status(200).json({ success:true,data:result })
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
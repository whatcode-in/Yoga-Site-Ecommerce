// import { set } from "mongoose";
import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"
import Tshirts from "../../Model/Tshirts";


let  handler=async (req, res) =>{

    let result=null;
    if(req.method==="POST"){
        let parent=await Product.findById({_id:req.body[0].parent});
        // console.log(parent);
        for (let i=0;i<req.body.length;i++){
            let tshirt=new Tshirts({
                parent:req.body[i].parent,
                img:req.body[i].img,
                category:req.body[i].category,
                size:req.body[i].size,
                color:req.body[i].color,
                price:req.body[i].price,
                availableQty:req.body[i].availableQty
            })
            let newcolor=new Set(parent.color);
            let newsize=new Set(parent.size);
            newcolor.add(tshirt.color)
            newsize.add(tshirt.size)
            let b={}
            if(parent._doc.stock[tshirt.color]!==undefined){
                console.log("heyeyey");
             b={...parent._doc.stock[tshirt.color].size}
            }
            // else{
            //     console.log("hey");
            //  parent._doc.stock={}
            // }
          
            b[tshirt.size]={item:tshirt._id}
            let s={...parent._doc.stock}
            s[tshirt.color]={size:b,img:tshirt.img}
            parent._doc.stock=s
            // let newstock={...parent._doc.stock,tshirt.color:}
            let newproduct={...parent._doc,color:Array.from(newcolor),size:Array.from(newsize),availableQty:parent._doc.availableQty+tshirt.availableQty}

            console.log("hererere",newproduct);
            await tshirt.save();
            result=await Product.findByIdAndUpdate(parent,newproduct,{new:true});
            // console.log(result);
        }

        return res.status(200).json({ success:true,data:result })
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
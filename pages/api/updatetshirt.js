import connectdb from "../../Middleware/connectdb"
import Product from "../../Model/Product"
import Tshirts from "../../Model/Tshirts"


let  handler=async (req, res) =>{
let result=null;
    if(req.method==="POST"){
        // console.log(req.body);
            let temp=await Tshirts.findById(req.body._id)
            let tshirt=await Tshirts.findByIdAndUpdate(req.body._id,{...req.body,availableQty:temp.availableQty+req.body.availableQty},{new:true})
            let parent=await Product.findById({_id:tshirt.parent});
            console.log(parent);
            
            let newcolor=new Set(parent.color);
            let newsize=new Set(parent.size);
            newcolor.add(tshirt.color)
            newsize.add(tshirt.size)
            let b={}
            if(parent.stock[tshirt.color]!==undefined){
                // console.log("heyeyey");
             b={...parent.stock[tshirt.color].size}
            }
            // else{
            //     console.log("hey");
            //  parent.stock={}
            // }
          
            b[tshirt.size]={item:tshirt._id,availableQty:tshirt.availableQty}
            let s={...parent.stock}
            // s[tshirt.color]={size:b,img:tshirt.img}
            if(s[tshirt.color].availableQty===undefined){
                s[tshirt.color]={size:b,img:tshirt.img,price:tshirt.price,availableQty:tshirt.availableQty}
            }else{
                s[tshirt.color]={size:b,img:tshirt.img,price:tshirt.price,availableQty:tshirt.availableQty+s[tshirt.color].availableQty}
            }
            parent.stock=s
            // let newstock={...parent.stock,tshirt.color:}
            let newproduct={...parent._doc,color:Array.from(newcolor),size:Array.from(newsize),availableQty:parent.availableQty+req.body.availableQty}

            // console.log("hererere",newproduct);
            // await tshirt.save();
            result=await Product.findByIdAndUpdate(parent,newproduct,{new:true});

        return res.status(200).json({ success:true ,tshirt,Product:result})
    }
    else{
        return  res.status(400).json({ error:"this method is not allowed" })
    }
  }
  
export default connectdb(handler)
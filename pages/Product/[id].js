import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../State/actioncreators/mavaproduct";
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../State';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Item = () => {
    let router = useRouter();
    let { id } = router.query;
    let {product}=useSelector((state)=>state.mavaproducts)
    let dispatch= useDispatch()
    useEffect(()=>{
        if(id){
            dispatch(getProductById(id))
        }
    },[id])
    let {user}=useSelector((state)=>state.user)
    let { addToCart, clearCart } = bindActionCreators(actioncreators.default, dispatch);

    let calltoast=({type,msg})=>{
        switch (type) {
          case "success":
            toast.success(msg, {
              position: "bottom-right",
              autoClose: 1800,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
            });
            break;
          case "error":
            toast.error(msg, {
              position: "bottom-right",
              autoClose: 1800,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
            });
        }
      }

      let buynow = (params) => {
        clearCart();
        console.log(params);
        addToCart(params);
    
      }
    
    return (
        product!==null &&
        <section className="text-gray-600 body-font overflow-hidden py-14">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">MAVA.com</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
            
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">€{product.price}</span>
               
                <Link href={"/Checkout"}><a><button disabled={user===null?true:false} className="flex ml-4 text-white bg-green-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-green-600 rounded" onClick={() => buynow({ itemcode: product.id, price: parseInt(product.price), qty: 1, name: product.name })}>Buy Now</button></a></Link>
              <button disabled={user===null?true:false} className="flex ml-4 text-white bg-green-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-green-600 rounded" onClick={() =>{ addToCart({ itemcode: product.id, price: parseInt( product.price), qty: 1, name: product.name});
              calltoast({type:"success",msg:"Item added successfully to the cart"})
              }}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Item
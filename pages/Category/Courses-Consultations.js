import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../State';
import  { getProductByCategory } from "../../State/actioncreators/mavaproduct"
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';
const CoursesConsultations = () => {
    let dispatch=useDispatch();
    let [msg,setmsg]=useState("LOADING.........");
    let {products}=useSelector((state)=>state.mavaproducts)
    let { addToCart, removeFromCart, clearCart } = bindActionCreators(actioncreators.default, dispatch);
    let { cart, subtotal } = useSelector((state) => state.cart);
    let router=useRouter()
    useEffect(()=>{

        dispatch(getProductByCategory("Courses and Consultations"));
      
      setTimeout(() => {
          setmsg("No Items available")
        
      }, 10000);
    },[router.pathname])
   
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-around">
        {products.length===0 ?<h1 className='text-2xl font-bold flex justify-center items-center text-gray-500'>{msg}</h1>:products.map((item) => {
           return (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 hover:cursor-pointer w-full m-12 border-2 rounded-xl shadow-lg">
            <Link key={item.id} passHref={true} href={`/Product/${item.id}`}>
            <a className="block h-48 rounded overflow-hidden pb-2">
              <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`https://blushing-plum-belt.cyclic.app/api/admin/photo/${item._id}`} />
            </a>
            </Link> 
            <hr />
            <div className=" mt-4">
              <h2 className="text-gray-900 title-font text-xl font-medium">{item.name}</h2>
              <div className='my-3 px-5 flex justify-between'>
                <p className="text-lg">€{item.price}</p>
                <div className='py-2 px-3 border-2 rounded inline-block'>
                  in stock
                </div>
              </div>
              <div className="cart">
                <div className='flex flex-row space-x-2 items-center justify-center'>
                 {cart[item.id]!=null?<> <AiFillMinusCircle onClick={() => removeFromCart({ itemcode:item.id, qty: 1 })} className='text-pink-700 cursor-pointer' /> <span>{cart[item.id].qty}</span><AiFillPlusCircle onClick={() => addToCart({ itemcode:item.id, qty: 1 })} className='text-pink-700 cursor-pointer' /></>: <button className="flex ml-4 text-white bg-pink-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={() =>{ addToCart({ itemcode: item.id, price:parseInt(item.price), qty: 1, name: item.name });
    }}>Add to Cart</button>}
                </div>
              </div>
            </div>
          </div>
        )})}
        </div>
      </div>
    </section>
  )
}

export default CoursesConsultations

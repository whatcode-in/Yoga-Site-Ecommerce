import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AiOutlineClose, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { actioncreators } from '../State';
import { useState } from 'react';
import { useRouter } from 'next/router';
const Checkout = () => {

  let { cart, subtotal } = useSelector((state) => state.cart);
  let {user}=useSelector((state)=>state.user)
  let dispatch = useDispatch()
  let router=useRouter()
  let { addToCart, removeFromCart } = bindActionCreators(actioncreators.default, dispatch);

  let [data,setdata]=useState({name:"",email:"",phone:"",addr:"",pincode:"",city:"",state:""})

  let handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
  }

  let handlepay=async()=>{
    if(Object.keys(cart).length!==0){
      let response=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransection`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId:user.id,products:cart,address:data.addr,amount:subtotal}),
      })
      let res=await response.json()
      if (res.success) {
        router.push(`/Order/${res.order._id}`)
      }
    }
  }

  return (
    <div className='container m-auto w-5/6 my-8'>
      <h1 className='text-center font-bold text-3xl'>CheckOut</h1>
      <h2 className='text-xl font-semibold my-2'>1.&nbsp; Deliver Details</h2>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} value={data.name}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"onChange={handlechange} value={data.email}/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="">
            <label htmlFor="addr" className="leading-7 text-sm text-gray-600 mb-1">Address</label>
            <textarea id="addr" name="addr" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handlechange} value={data.addr}></textarea>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600 mb-1">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} value={data.phone}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600 mb-1">Pincode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} value={data.pincode}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600 mb-1">City</label>
            <input type="text" id="city" name="city" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.city}  onChange={handlechange}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600 mb-1">State</label>
            <input type="text" id="state" name="state" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.state} onChange={handlechange} />
          </div>
        </div>
      </div>
      <h2 className='text-xl font-semibold mt-8'>2.&nbsp; Review Cart items</h2>

      <div className="sidecar bg-green-50 mb-10 mt-4">
        <div className=' px-10 py-6 '>
          {/* <ol className={`list-decimal flex "flex-col"> */}
          <ol className={`list-decimal flex ${Object.keys(cart).length>5?"flex-wrap justify-around m-5":"flex-col"}`}>
            {Object.keys(cart).length === 0 ? <div className='my-3'>Your cart is empty </div> :
              Object.keys(cart).map((itemcode) => {
                // console.log(item);
                return (
                  <li key={`${itemcode}`} >
                    <div className="flex my-3 space-x-5">
                      <div className='p-3'>
                        {cart[itemcode].name}
                      </div>
                      <div className='flex flex-row space-x-2 items-center justify-center'>
                        <AiFillMinusCircle onClick={() => removeFromCart({ itemcode, qty: 1 })} className='text-green-700 cursor-pointer' /> <span>{cart[itemcode].qty}</span><AiFillPlusCircle onClick={() => addToCart({ itemcode, qty: 1 })} className='text-green-700 cursor-pointer' />
                      </div>
                    </div>
                  </li>)
              })
            }
          </ol>
          <div className='my-3 font-bold text-center'>Amount: €{subtotal}</div>
          <div className='flex justify-center'>

            <button className={`flex text-white  border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-green-600 rounded bg-green-500`} onClick={handlepay}>Pay Now</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Checkout

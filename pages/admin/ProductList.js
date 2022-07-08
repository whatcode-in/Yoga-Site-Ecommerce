import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faIndianRupeeSign,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from "../../State/actioncreators/products"
// import client from "../../client";
import Temp from "./Temp"
export default function ProductList() {
const [isDelete,setIsDelete]=useState(false)
let dispatch=useDispatch();
  let {gettshirts}=bindActionCreators(actions,dispatch);
  useEffect(()=>{
    if (tshirts.length===0){
      gettshirts();
    }
  },[])
  let {tshirts}=useSelector((state)=>state.products)
  // let { products } = res
  let  product  = tshirts
  console.log(product);
  return (
    <div className="flex">
    <Temp/>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-around">
            {product.length === 0 ? <h1 className='text-2xl font-bold flex justify-center items-center text-gray-500'>not item available</h1> : product.map((item) => {
              return (
                    <div key={item._id} className="lg:w-1/3 md:w-1/2 p-4 hover:cursor-pointer w-full m-9 border-2 rounded-xl shadow-lg">
                      <a className="block h-48 rounded overflow-hidden pb-2">
                        <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`${item.img}`} />
                      </a>
                      <hr />
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-xl font-medium">{item.title}</h2>
                        <div className='my-3 px-5 flex justify-between'>
                          <p className="text-lg">₹{item.price}</p>
                          <div className='py-2 px-3 border-2 rounded inline-block'>
                            {item.availableQty}
                          </div>
                        </div>
                        <div className="cart">
                          <div className='flex flex-row space-x-2 items-center justify-center'>
                          <button className="border-2 mx-3 hover:bg-green-500 px-4 rounded-md font-semibold py-2">Edit</button>
                          <button className="border-2 mx-3 hover:bg-green-500 px-4 rounded-md font-semibold py-2">delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}

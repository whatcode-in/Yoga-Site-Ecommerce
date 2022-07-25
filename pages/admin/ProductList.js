import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Temp from "./Temp"
import * as actions from "../../State/actioncreators/mavaproduct";
import { bindActionCreators } from "redux";
import {motion} from "framer-motion"
import Modal from "../../Components/Modal.js";
export default function ProductList() {
let dispatch=useDispatch();
let {products}=useSelector((state)=>state.mavaproducts)
let { deleteProductById, getAllProducts }=bindActionCreators(actions,dispatch);
  useEffect(()=>{
      getAllProducts()
  },[products])

  let [Editdata,setEditdata]=useState({name:"",desc:"",category:"",rating:"",price:0,img:null,stock:""})
  let [modal,setmodal]=useState(false)

  let close=()=>{
    setmodal(false)
  }

  let open=()=>{
    setmodal(true)
  }
  
  return (
    <div className="flex">
    <Temp/>
    <section className="text-gray-600 body-font w-4/5">
        <div className="container md:px-5 py-24 mx-auto w-full">
          <div className="flex flex-wrap -m-4 justify-around w-full">
            {products.length === 0 ? <h1 className='text-2xl font-bold flex justify-center items-center text-gray-500'>Loading......</h1> : products.map((item) => {
              return (
                    <div key={item.id} className="w-3/4 lg:w-1/4 md:w-1/2 p-4 hover:cursor-pointer m-9 border-2 rounded-xl shadow-lg">
                      <a className="block h-48 rounded overflow-hidden pb-2">
                        <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`${item.img}`} />
                      </a>
                      <hr />
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-xl font-medium">{item.name}</h2>
                        <div className='my-3 px-5 flex justify-between'>
                          <p className="text-lg">€{item.price}</p>
                          <div className='py-2 px-3 border-2 rounded inline-block'>
                            {item.stock}
                          </div>
                        </div>
                        <div className="cart">
                          <div className='flex flex-row space-x-2 items-center justify-center'>
                          <motion.button className="border-2 mx-3 hover:bg-green-500 px-4 rounded-md font-semibold py-2" onClick={()=>{open()
                          setEditdata(item)
                          }}>Edit</motion.button>
                          <button className="border-2 mx-3 hover:bg-green-500 px-4 rounded-md font-semibold py-2" onClick={()=>{deleteProductById(item.id)
                          }}>delete</button>
                          </div>
                        </div>
                      </div>
       
                    </div>
            )})}
          </div>
        </div>
      </section>
      {
          modal && <Modal modalOpen={modal} handleClose={close} data={Editdata} setdata={setEditdata}/>
        }
    </div>
  );
}

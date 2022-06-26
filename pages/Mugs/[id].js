import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../State';
import Link from "next/link"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let fun = async (id, setproduct, setcolor, setimage, setsize) => {
  let product = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProductById?id=${id}`)
  // let product=await fetch(`http://192.168.52.135:3000/api/getProductById?id=${id}`)
  let res = await product.json()
  // console.log(res);
  // console.log(res.product.size.split(","));
  setproduct(res.product)
  setimage(res.product.img)
//   setsize(Object.keys(res.product.stock[Object.keys(res.product.stock)[0]].size)[0])
  setcolor(Object.keys(res.product.stock)[0])
  // return res.product
}
const item = () => {
  let router = useRouter();
  let { id } = router.query;
  //  console.log(id);
  let [product, setproduct] = useState(null);
  let [color, setcolor] = useState(null);
  let [image, setimage] = useState(null);
  let [size, setsize] = useState("");
  useEffect(() => {
    if (id) {
      setproduct(fun(id, setproduct, setcolor, setimage, setsize))
    }
  }, [id])

  let handleclick = (e) => {
    setcolor(e.target.name);
    setimage(product.stock[e.target.name].img)
    // setsize(product.stock[product.stock[e.target.name]].size[0])
    // setsize(Object.keys(product.stock[e.target.name].size)[0])
  }

  // console.log("final",product);

  let dispatch = useDispatch();
  let { addToCart, clearCart } = bindActionCreators(actioncreators.default, dispatch);

  let [pincode, setpincode] = useState("");
  let [servicebiliby, setservicebiliby] = useState(null);
  let handlechange = (e) => {
    setpincode(e.target.value)
  }

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

  let checkservicbility = async () => {
    // let pinjson=await fetch("http://192.168.52.135:3000/api/pincodes")
    let pinjson = await fetch("http://localhost:3000/api/pincodes")
    let pins = await pinjson.json();
    if (pins.includes(parseInt(pincode))) {
      setservicebiliby(true);
        calltoast({type:"success",msg:"yaa! item can be deliver to your house"})
      } else {
        setservicebiliby(false);
        calltoast({type:"error",msg:'Sorry! we can\'t deliver to your address'})
    }
    setTimeout(() => {
      setservicebiliby(null)
    }, 3000);
  }

  let refressize = (newsize) => {
    // setsize(newsize)
  }

  let buynow = (params) => {
    clearCart();
    console.log(params);
    addToCart(params);

  }

  return (
    product == null ? <h1 className='text-2xl font-bold flex justify-center items-center w-full h-44 text-gray-500'>LOADING............</h1> : <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className='h-64 lg:h-full lg:w-[500px] m-auto'>
            <img alt="ecommerce" className="lg:w-1/2 w-full h-full object-cover object-center rounded m-auto" src={`${image}`} />
          </div>
          <div className="2xl:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 m-auto">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.title}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.desc}({color})</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{product.about}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {
                  product?.stock != null &&
                  product?.color?.map(i => {
                    return <button key={i} className={`border-2 ${color === i ? "border-black border-4" : "border-gray-300"} ml-1 ${i == "black" || i == "white" ? `bg-${i}` : `bg-${i}-500`} rounded-full w-6 h-6 focus:outline-none`} name={i} onClick={handleclick} hidden={product?.stock[i]?.availableQty <= 0 ? true : false}></button>
                  })
                }
                  </div>
            
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹{product.stock !== undefined ? product?.stock[color]?.price : ""}</span>
              <Link href={"/Checkout"}><a><button className="flex ml-4 text-white bg-pink-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={() => buynow({ itemcode: product?.stock[color].item, price: product?.stock[color]?.price, qty: 1, name: product.desc, variant: color })}>Buy Now</button></a></Link>
              <button className="flex ml-4 text-white bg-pink-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={() =>{ addToCart({ itemcode: product?.stock[color].item, price: product?.stock[color]?.price, qty: 1, name: product.desc, variant: color });
              calltoast({type:"success",msg:"Item added successfully to the cart"})
              }}>Add to Cart</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>

          <div className="pin flex space-x-4 my-3 justify-start">
            <input onChange={handlechange} type="text" className='border-2 rounded-md p-2' />
            <button onClick={checkservicbility} className='ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Check</button>
          </div>

          <div className="msg h-3">
            {(servicebiliby && servicebiliby !== null) && <div className='text-green-500'>yee! we can deviler product</div>}
            {(!servicebiliby && servicebiliby !== null) && <div className='text-red-500'>Sorry! we can not deliver the product</div>}
          </div>
        </div>
      </div>
    </div>
    </section >
  )
}

export default item

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { BsFillBagCheckFill } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actioncreators } from '../State/index'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import logo from "../logo.svg"
const Navbar = () => {
  let ref = useRef();
  // let ref=React.forwardRef();
  let router=useRouter();

  const [currentUser,setCurrentUser] = React.useState()

  let { cart, subtotal } = useSelector((state) => state.cart);
  let {user}=useSelector((state)=>state.user)
  // console.log(user);

  let [dropdown,setdropdown]=useState(false)
  let dispatch = useDispatch()
  let { addToCart, removeFromCart, clearCart } = bindActionCreators(actioncreators.default, dispatch);

  let toggle = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }

  let logout=()=>{
  //   toast.success("logout Successful", {
  //     position: "bottom-right",
  //     autoClose: 1800,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark"
  //   });
  //  localStorage.removeItem("token")
  //   setTimeout(() => {
  //     window.location.reload(false)
  //     router.push("/")
  //   }, 200);

  let token = sessionStorage.getItem('Token')
  if(token){
    setCurrentUser('')
    sessionStorage.removeItem('Token')
  }
}

function checkCurrentUser(){
  let token = sessionStorage.getItem('Token')
  if(token){
    setCurrentUser(token)
  }
}

  useEffect(() => {
    checkCurrentUser()
  },[currentUser])

  return (
    <nav className='navbar flex flex-col sticky top-0 justify-center items-center py-2 md:flex-row bg-green-900 shadow-lg'>
      <div className='md:absolute md:left-2 top-2'>
        <Link className="logo hover:cursor-pointer" href="/">
          <a>
          <Image
                  alt="logo"
                  width={100}
                  src={logo}
                  height={50}
                />
          </a>
        </Link>
      </div>
      <ul className='py-2 space-x-3 md:space-x-6 font-bold flex space-y-2 flex-row text-sm md:text-base'>
        <li></li>
        <Link href="/Category/Electronics"><a><li className='text-white'>Electronics</li></a></Link>
        <Link href="/Category/Groceries"><a><li className='text-white'>Groceries</li></a></Link>
        <Link href="/Category/Home-Kitchen"><a><li className='text-white'>Home & Kitchen</li></a></Link>
        <Link href="/Category/Books"><a><li className='text-white'>Books</li></a></Link>

        <div className='text-white' style={{fontSize: "14px"}}>{currentUser}</div>
      </ul>
          {/* {user===null && <Link href={"/Login"}><a><button className='bg-pink-400 rounded-lg absolute right-6 top-4 text-white text-lg py-1 px-2'>Login</button>  </a></Link>} */}
          
          {/* {user!==null && */}
          
      <div  className="cart flex space-x-2 sm:space-x-5 cursor-pointer absolute text-2xl right-6 top-4 sm:top-6 sm:text-3xl ">
        <Link href=""><a  onMouseOver={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>
          <CgProfile/>
  
          </a></Link>
        <AiOutlineShoppingCart onClick={toggle}  className="text-white"/>
        
      </div>
      
      {/* } */}
      {dropdown==true && <div className='absolute top-10 md:top-12 font-semibold right-14  md:right-20 w-36 bg-white text-center py-3 flex flex-col rounded-lg'  onMouseOver={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>
            <ul>
              <Link href={"/Myaccount"}><a><li className='hover:text-green-700 hover:cursor-pointer py-2'>My Account</li></a></Link>
              <Link href={"/Orders"}><a><li className='hover:text-green-700 hover:cursor-pointer py-2'>Orders</li></a></Link>
              <a><li onClick={logout} className='hover:text-pink-greenhover:cursor-pointer py-2'>Logout</li></a>
            </ul>
            </div>}

      <div ref={ref} className="fixed sidecart h-[100vh] w-72 top-28 md:top-16 right-0 bg-green-400  transform transition-transform translate-x-full z-10">
        <div className='bg-green-400 p-10 pt-14 z-10'>

          <h2 className='text-2xl'>Shooping Cart</h2>
          <span onClick={toggle} className='cursor-pointer absolute top-5 right-3 text-xl'><AiOutlineClose/></span>
          <ol className='list-decimal flex flex-col'>
            {Object.keys(cart).length === 0 ? <div className='my-3'>Your cart is empty </div> :
            Object.keys(cart).map((itemcode)=>{
              // console.log(item);
            return (
              <li key={`${itemcode}`}>
                <div className="flex my-3">
                  <div className='p-3'>
                    {cart[itemcode].name}
                  </div>
                  <div className='flex flex-row space-x-2 items-center justify-center'>
                    <AiFillMinusCircle onClick={()=>removeFromCart({itemcode,qty:1})} className='text-pink-700 cursor-pointer' /> <span>{cart[itemcode].qty}</span><AiFillPlusCircle onClick={()=>addToCart({itemcode,qty:1})} className='text-pink-700 cursor-pointer' />
                  </div>
                </div>
              </li>)
            })
            }
          </ol>
          <div className='my-3 font-bold text-center'>Amount:&nbsp; €{subtotal}</div>
          <div className='flex'>
            <Link href={"/Checkout"}><a> <button className="flex mr-2 text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm items-center my-4"><BsFillBagCheckFill className='mr-2' />Check out</button></a></Link>
            <button onClick={clearCart} className="flex mr-2 text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm items-center my-4">Clear Cart</button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

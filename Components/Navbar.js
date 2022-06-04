import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { BsFillBagCheckFill } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actioncreators } from '../State/index'
const Navbar = () => {
  let ref = useRef();
  // let ref=React.forwardRef();

  let { cart, subtotal } = useSelector((state) => state.cart);
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
  return (
    <nav className='navbar flex flex-col sticky top-0 justify-center items-center py-2 md:flex-row bg-white shadow-lg'>
      <div className='md:absolute md:left-5 md:top-3 '>
        <Link className="logo hover:cursor-pointer" href="/">
          <a>
            <Image src="/logo.png" width={200} height={40} />
          </a>
        </Link>
      </div>
      <ul className='py-2 space-x-3 md:space-x-6 font-bold flex space-y-2 flex-row text-sm md:text-base'>
        <li></li>
        <Link href="/Tshirts"><a><li className='hover:text-pink-500'>Tshirts</li></a></Link>
        <Link href="/Hoodies"><a><li className='hover:text-pink-500'>Hoodies</li></a></Link>
        <Link href="/Stickers"><a><li className='hover:text-pink-500'>Stickers</li></a></Link>
        <Link href="/Mugs"><a><li className='hover:text-pink-500'>Mugs</li></a></Link>
      </ul>
      <div  className="cart flex space-x-2 sm:space-x-5 cursor-pointer absolute text-2xl right-6 top-4 sm:top-6 sm:text-3xl ">
        <Link href={"/Login"}><a><CgProfile/></a></Link>
        <AiOutlineShoppingCart onClick={toggle} />
      </div>

      <div ref={ref} className="sidecart h-[100vh] w-72 top-28 md:top-16 right-0 absolute bg-pink-200  transform transition-transform translate-x-full z-10">
        <div className='bg-pink-200 p-10 pt-14 z-10'>

          <h2 className='text-2xl'>Shooping Cart</h2>
          <span onClick={toggle} className='cursor-pointer absolute top-5 right-3 text-xl'><AiOutlineClose /></span>
          <ol className='list-decimal flex flex-col'>
            {Object.keys(cart).length === 0 ? <div className='my-3'>Your cart is empty </div> :
            Object.keys(cart).map((itemcode)=>{
              // console.log(item);
            return (
              <li key={`${itemcode}`}>
                <div className="flex my-3">
                  <div className='p-3'>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className='flex flex-row space-x-2 items-center justify-center'>
                    <AiFillMinusCircle onClick={()=>removeFromCart({itemcode,qty:1})} className='text-pink-700 cursor-pointer' /> <span>{cart[itemcode].qty}</span><AiFillPlusCircle onClick={()=>addToCart({itemcode,qty:1})} className='text-pink-700 cursor-pointer' />
                  </div>
                </div>
              </li>)
            })
            }
          </ol>
          <div className='my-3 font-bold text-center'>Amount:&nbsp; ₹{subtotal}</div>
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

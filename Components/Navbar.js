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
import { useAuthValue } from "../authContext"
import { getAuth } from 'firebase/auth'

const Navbar = () => {
  let ref = useRef();
  // let ref=React.forwardRef();
  let router=useRouter();

  

  // const [currentUser,setCurrentUser] = React.useState()

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

  const {currentUser} = useAuthValue()

  let logout=()=>{
    
  if(currentUser.name){
    let auth = getAuth();
    auth.signOut()
    window.location.reload(true)
  }
  else{
    router.push('/Login')
  }
    
 
}
//
const [windowWidth, setWindowWidth] = useState(1500);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  console.log('window width: ',windowWidth)

  return () => window.removeEventListener('resize', handleResize);
}, [windowWidth]);


  return (
    <nav className='sticky top-0 z-30 w-full navbar flex flex-col justify-center items-center py-2 md:flex-row shadow-lg navbar-extra'>
      <div className='md:absolute md:left-4 top-4 navbar-logo-responsive'>
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
      <ul className='py-2 space-x-3 md:space-x-6 font-bold flex flex-wrap items-center text-sm md:text-base'>
  <li></li>
  <Link href="/Category/Electronics"><a><li className='text-white py-2 px-3 md:py-0 md:px-0'>Electronics</li></a></Link>
  <Link href="/Category/Groceries"><a><li className='text-white py-2 px-3 md:py-0 md:px-0'>Groceries</li></a></Link>
  <Link href="/Category/Home-Kitchen"><a><li className='text-white py-2 px-3 md:py-0 md:px-0'>Home & Kitchen</li></a></Link>
  <Link href="/Category/Books"><a><li className='text-white py-2 px-3 md:py-0 md:px-0'>Books</li></a></Link>
  {/* <Link href="/Book"><a><li className='text-white py-2 px-3 md:py-0 md:px-0'>Booking</li></a></Link> */}
  <Link href="/OurPrograms"><a><li className='text-white py-2 px-3 md:py-0 md:px-0'>Our Programs</li></a></Link>
  {windowWidth < 400 &&  <a
        href="https://yoga-site-six.vercel.app/"
        class="back-to-site-button"
      >
        Back to Site
      </a>}
</ul>


     
    
      <div  className="cart flex space-x-2 sm:space-x-5  cursor-pointer absolute text-2xl right-6 top-4 sm:top-6 sm:text-3xl navbar-buttons-responsive">
      {windowWidth > 400 &&
      <a
        href="https://yoga-site-six.vercel.app/"
        class="back-to-site-button"
      >
        Back to Site
      </a>}
    
      <div style={{ position: 'relative', display: 'inline-block',marginTop: "0.2rem"}}>
        <Link href=""><a  onMouseOver={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>
          <CgProfile className="text-white" size={windowWidth > 380 ? 38 : 33}/>
          </a></Link>
        </div>
          {currentUser && <div className='text-white' style={{fontSize: "14px",textAlign: 'center'}}>{currentUser.name}</div>}
        {/* <AiOutlineShoppingCart onClick={toggle}  className="text-white"/> */}
        <div style={{ position: 'relative', display: 'inline-block'}}>
      <AiOutlineShoppingCart  onClick={toggle}  className="text-white" size={windowWidth > 380 ? 48 : 43} />
      <span style={{
        position: 'absolute',
        top: '2px',
        left: '25px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white',
      }}>{Object.keys(cart).length}</span>
    </div>
        
      </div>
      
      {/* } */}
      {dropdown==true && <div className='absolute top-10 md:top-12 font-semibold right-14  md:right-20 w-36 bg-white text-center py-3 flex flex-col rounded-lg'  onMouseOver={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>
            <ul>
              <Link href={"/Login"}><a><li className='hover:text-green-700 hover:cursor-pointer py-2'>My Account</li></a></Link>
              <Link href={"/Orders"}><a><li className='hover:text-green-700 hover:cursor-pointer py-2'>Orders</li></a></Link>
              <a><li onClick={logout} className='hover:text-green-700 hover:cursor-pointer py-2'>{currentUser.name ? "Logout" : "Sign Up/Login"}</li></a>
            </ul>
            </div>}

      <div ref={ref} className="fixed sidecart h-[100vh] w-72 top-28 md:top-16 right-0 bg-green-400  transform transition-transform translate-x-full z-10 shopping-cart">
        <div className='p-10 pt-14 z-10'>

          <h2 className='text-2xl'>Shoping Cart</h2>
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
            <Link href={"/Checkout"}><a> <button className="flex mr-2 text-white shopping-cart-button border-0 p-2 focus:outline-none rounded text-sm items-center my-4"><BsFillBagCheckFill className='mr-2' />Check out</button></a></Link>
            <button onClick={clearCart} className="flex mr-2 text-white shopping-cart-button border-0 p-2 focus:outline-none rounded text-sm items-center my-4">Clear Cart</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

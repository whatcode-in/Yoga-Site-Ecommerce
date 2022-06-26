import React, { useState } from 'react'
import Link from 'next/link'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setuser} from "../State/actioncreators/user"
const Login = () => {
  let router=useRouter()
  let [data,setdata]=useState({email:"",password:""});

  let dispatch=useDispatch()
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      router.push("/")
    }
  })

  let handlechange=(event)=>{
      setdata({...data,[event.target.name]:event.target.value});
  }

  let handlesubmit=async(event)=>{
    event.preventDefault();
    let res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let response=await res.json();
    if (response.success) {
      toast.success("login Successful", {
        position: "bottom-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
     localStorage.setItem("token",response.token)
     dispatch(setuser(response.token))
    } else {
      toast.error(response.error, {
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
    if(response.success){
      setTimeout(() => {
        router.push("/")
        
      }, 100);
    }
  }
  return (
    <div
      className="mx-auto flex my-16 max-w-lg items-center justify-center text-black">
      <form method='POST' onSubmit={handlesubmit} className="flex w-full flex-col space-y-10 px-5">
        <div className="text-center text-4xl font-medium">Log In</div>

        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input value={data.email} onChange={handlechange} className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" name='email' type="email" />
        </div>

        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            password
          </label>
          <input value={data.password} onChange={handlechange} className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="password" name='password' type="password" />
        </div>

        <button className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700" type='submit'>
          LOG IN
        </button>
        <section className="flex w-full flex-col space-y-5">
        <Link href={"/Forget"} ><a className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a></Link>

       <p className="text-center text-lg">
          No account? &nbsp;
          <Link href={"/Signup"}><a  href="#" className="font-medium  text-indigo-500 underline-offset-4 hover:underline" >Create One</a ></Link>
        </p>
        </section>
      </form>
    </div>
  )
}

export default Login

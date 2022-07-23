import React, { useState } from 'react'
import Link from 'next/link'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const Sginup = () => {
  let router=useRouter();
  let [data, setdata] = useState({ fname: "", lname: "", email: "", password: "", cpassword: "", address: "" })
  let handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }


  useState(()=>{
    // if (localStorage.getItem("token")) {
    //   router.push("/")
    // }
  })

  let submit = async (event) => {
    event.preventDefault()
    if (data.cpassword===data.password) {
      
    let res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let response=await res.json();
    console.log("in sign up",response);
    toast.success("Signup Successful", {
      position: "bottom-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
    setdata({fname: "", lname: "", email: "", password: "", cpassword: "", address: "" });
    setTimeout(() => {
      router.push("/Login")
    }, 1000);
      
  } else {
    toast.warning("Passowrd does not match", {
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
  return (
    <div className="w-full max-w-lg px-5 m-auto my-20">
      <div className="text-center text-4xl font-medium my-4">Sign Up</div>
      <form method='POST' onSubmit={submit} className="flex flex-wrap -mx-3 mb-6 space-y-2 md:space-y-0">
        {/* <form action="" method="post" onSubmit={submit}> */}
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="fname" name='fname' type="text" value={data.fname} onChange={handlechange} />

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="lname" name='lname' type="text" value={data.lname} onChange={handlechange} />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" name='email' type="email" value={data.email} onChange={handlechange} />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="address" name='address' type="address" value={data.address} onChange={handlechange} />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
              password
            </label>
            <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="password" name='password' type="password" value={data.password} onChange={handlechange} />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cpassword">
              Confirm passwrod
            </label>
            <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="cpassword" name='cpassword' type="password" value={data.cpassword} onChange={handlechange} />
          </div>
          <button type='submit' className="mx-3 w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
            Sign up
          </button>
        {/* </form> */}

        <p className="text-center w-full text-base my-2">
          Already have an Account? &nbsp;
          <Link href={"/Login"}><a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline" >LogIn</a ></Link>
        </p>
      </form>
    </div>
  )
}

export default Sginup

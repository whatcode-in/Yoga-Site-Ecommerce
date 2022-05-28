import React from 'react'
import Link from 'next/link'
const Sginup = () => {
  return (
    <div className="w-full max-w-lg px-5 m-auto my-20">
      <div className="text-center text-4xl font-medium my-4">Sign Up</div>
      <div className="flex flex-wrap -mx-3 mb-6 space-y-2 md:space-y-0">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <input className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="fname" name='fname' type="text" />

        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <input className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="lname" name='lname' type="text" />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" name='email' type="email" />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="address" name='address' type="address" />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            password
          </label>
          <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="password" name='password' type="password" />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cpassword">
            Confirm passwrod
          </label>
          <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="cpassword" name='cpassword' type="password" />
        </div>
        <button className="mx-3 w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
          Sign in
        </button>

        <p className="text-center w-full text-base my-2">
          Already have an Account? &nbsp;
          <Link href={"/Login"}><a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline" >LogIn</a ></Link>
        </p>
      </div>
    </div>
  )
}

export default Sginup

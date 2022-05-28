import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <div
      className="mx-auto flex my-16 max-w-lg items-center justify-center text-black">
      <section className="flex w-full flex-col space-y-10 px-5">
        <div className="text-center text-4xl font-medium">Log In</div>

        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" name='email' type="email" />
        </div>

        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            password
          </label>
          <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="password" name='password' type="password" />
        </div>

        <button className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
          LOG IN
        </button>
        <section className="flex w-full flex-col space-y-5">
        <Link href={"/Forget"} ><a className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a></Link>

       <p className="text-center text-lg">
          No account? &nbsp;
          <Link href={"/Signup"}><a  href="#" className="font-medium  text-indigo-500 underline-offset-4 hover:underline" >Create One</a ></Link>
        </p>
        </section>
      </section>
    </div>
  )
}

export default Login

import React from "react";
import {useAuthValue} from "../authContext"
import { getAuth,
        GoogleAuthProvider,
        signInWithPopup,
        signInWithEmailAndPassword,
        sendPasswordResetEmail
        } from "firebase/auth";
import Swal from "sweetalert2";
import Link from 'next/link'


export default function Login(){
    const {currentUser} = useAuthValue()
    let auth = getAuth();
    let googleAuthProvider = new GoogleAuthProvider()
  
    const [data,setData] = React.useState({
      email: "",
      password: ""
    })
  
    function handleChange(event){
      setData({...data,[event.target.name]:event.target.value})
    }
  
    function loginWithGoogle(){
      //put in db if it is not there remaining
      signInWithPopup(auth,googleAuthProvider)
      .then((response) => {
    
        Swal.fire({
          icon: "success",
          title: "Login successfull",
          text: "Login with google successfull",
        });
     
      })
      .catch((error) => {
        alert(error.message)
      })
    }
  
  
    function login(){
      signInWithEmailAndPassword(auth,data.email,data.password)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Login successfull",
        });
      })
      .catch((error) => {
        alert(error.message)
      })
    }


  
    // return(<div className='flex flex-col items-center justify-center'>
    //  <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='email' name="email" value={data.email} onChange={handleChange}/> 
    //   <input  className='mt-8 w-72 border-2 border-solid border-black' placeholder='password' name="password" value={data.password} onChange={handleChange} />
    //   <button onClick={login} className="mt-8 bg-[#7A923E] p-2 text-white mb-8 w-[60%]">Login</button>
    //   <button onClick={loginWithGoogle} className="mt-2 bg-[#7A923E] p-2 text-white mb-8 w-[60%]" >Login With Google</button>
    // </div>
    // )

    return(
        <div style={{marginTop: "10rem"}}>
        <div className="mx-auto flex my-16 max-w-lg items-center justify-center text-black login-container py-3">
          <div className="flex w-full flex-col space-y-10 px-5">
            <div className="text-4xl font-medium">Log In</div>
            <div className="w-full">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={data.email}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                id="email"
                name="email"
                type="email"
              />
            </div>
    
            <div className="w-full">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                password
              </label>
              <input
                value={data.password}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                id="password"
                name="password"
                type="password"
              />
            </div>
    
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember
                </label>
              </div>
              <p
                className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                
              ><Link href={"/ResetPassword"}>
                FORGOT PASSWORD?
                </Link>
              </p>
            </div>
    
            <button
              onClick={login} 
              className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700 login-button"
              type="submit"
            >
              LOG IN
            </button>
    
            <div className="log-in-with-google" onClick={loginWithGoogle}>
              <div className="google-img-container mr-2">
              <img src="google.png" alt="" width="20px" height="10px" /> 
              </div>
            Login with Google
            </div>

            <section className="flex w-full flex-col space-y-5">
              <p className="text-center text-lg">
                Don`&apos;`t have an account? &nbsp;
               
                  <Link
                    href={"/Signup"}
                  ><a className="font-medium text-indigo-500  hover:underline"> 
                    Create One
                    </a>
                  </Link> {/*link */}
             
              </p>
            </section>
          </div>
        </div>
        </div>
    )
  }

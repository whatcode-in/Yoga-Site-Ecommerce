
import React from 'react'
// import styles from './Myaccount.module.css'


//sign up component
import {app} from '../firebaseconfig';
import { useAuthValue } from "../authContext"
import { getAuth,
        GoogleAuthProvider,
        signInWithPopup,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged  } from "firebase/auth";

function SignUp(){
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
    signInWithPopup(auth,googleAuthProvider)
    .then((response) => {
      console.log(response.user)
      alert("Login with google successfull")
    })
    .catch((error) => {
      alert(error.message)
    })
  }


  function signUp(){
    createUserWithEmailAndPassword(auth,data.email,data.password)
      .then((response) => {
        console.log(response.user)
        alert("User successfully created")
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return(<div className='flex flex-col items-center justify-center'>
    <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='email' name="email" value={data.email} onChange={handleChange}/> 
    <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='password' name="password" value={data.password} onChange={handleChange} />
  
    <button onClick={signUp} className="mt-8 bg-[#7A923E] p-2 text-white mb-8 w-[60%]">SignUp</button>
    <button onClick={loginWithGoogle} className="mt-2 bg-[#7A923E] p-2 text-white mb-8 w-[60%]">Login With Google</button>
  </div>)
}


//login component
function Login(){
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
    signInWithPopup(auth,googleAuthProvider)
    .then((response) => {
      alert("Login with google successfull")
    })
    .catch((error) => {
      alert(error.message)
    })
  }


  function login(){
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((response) => {
      alert("Login successfull")
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return(<div className='flex flex-col items-center justify-center'>
   <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='email' name="email" value={data.email} onChange={handleChange}/> 
    <input  className='mt-8 w-72 border-2 border-solid border-black' placeholder='password' name="password" value={data.password} onChange={handleChange} />
    <button onClick={login} className="mt-8 bg-[#7A923E] p-2 text-white mb-8 w-[60%]">Login</button>
    <button onClick={loginWithGoogle} className="mt-2 bg-[#7A923E] p-2 text-white mb-8 w-[60%]" >Login With Google</button>
  </div>
  )
}


const MyAccount = () => {

  const [showLogin,setShowLogin] = React.useState()

  return (
    <div className='flex flex-col items-center justify-center p-20'>
        
        <div className='flex mt-8'>
          <button className='bg-[#7A923E] p-2 text-white'  onClick={() => setShowLogin(true)}>Login</button> 
          <button className='ml-8 bg-[#7A923E] p-2 text-white' onClick={() => setShowLogin(false)}>SignUp</button> 
        </div>

        {
          showLogin ? <Login/> : <SignUp/>
        }

    </div>
  )
}

export default MyAccount

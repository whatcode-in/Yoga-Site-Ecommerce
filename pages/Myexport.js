import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
// import '../styles/globals.css'
import { Provider, useDispatch } from 'react-redux';
import store from '../State/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { setuser } from '../State/actioncreators/user';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
const myexport = ({ Component, pageProps }) => {
    let dispatch=useDispatch()
    const [progress, setProgress] = useState(0)
  let router=useRouter()

  // router.events?.on("routeChangeStart",()=>{setProgress(40)})
  router.events?.on("routeChangeComplete",()=>{setProgress(100)})
  useEffect(()=>{
    let token=localStorage.getItem("token")
    if(token){
        dispatch(setuser(token));
    }
  },[])
  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed={400}
      />
      <Navbar />
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <Footer />
    </div>
  )
}

export default myexport


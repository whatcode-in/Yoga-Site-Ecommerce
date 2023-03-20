
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../State/store';
import 'react-toastify/dist/ReactToastify.css';
import Myexport from "../Model/Myexport"
import {useState,useEffect} from 'react'
import {AuthProvider} from '../authContext'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebaseconfig'
import { database } from '../firebaseconfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({})


  const handleAuthChanged = async (user) => {
      let index = 0

      const q = query(collection(database, "users"), where("email", "==", user.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        if(index == 0){
          console.log('name: ',doc.data().name)
          setCurrentUser({name: doc.data().name,email: doc.data().email})
        }
        index += 1
      });
      
  }
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log('user main: ',user)
      
      handleAuthChanged(user)
      }
      // setCurrentUser(user)
      // if(currentUser){
      //   console.log("user auth: ",user)
      // }
     })
  }, [])

  return (
    <>
     <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
     <AuthProvider value={{currentUser}}>
      <Provider store={store}>
        <Myexport Component={Component} pageProps={pageProps}/>
      </Provider>
      </AuthProvider>
    </>
  )
}

export default MyApp

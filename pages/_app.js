
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../State/store';
import 'react-toastify/dist/ReactToastify.css';
import Myexport from "../Model/Myexport"
import {useState,useEffect} from 'react'
import {AuthProvider} from '../authContext'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebaseconfig'

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null)

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      if(currentUser){
        console.log("user: ",user.email)
      }
     })
  }, [])

  return (
    <>
     <AuthProvider value={{currentUser}}>
      <Provider store={store}>
        <Myexport Component={Component} pageProps={pageProps}/>
      </Provider>
      </AuthProvider>
    </>
  )
}

export default MyApp

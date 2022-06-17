
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../State/store';
import 'react-toastify/dist/ReactToastify.css';
import Myexport from "./Myexport"
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <Myexport Component={Component} pageProps={pageProps}/>

      </Provider>
    </>
  )
}

export default MyApp

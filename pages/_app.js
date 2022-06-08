import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../State/store';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

export default MyApp

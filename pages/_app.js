import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../State/store';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps}/>
      <Footer />
      </Provider>
    </>
  )
}

export default MyApp

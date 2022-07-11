import Head from 'next/head'
import { useState } from 'react';
import BannerProducts from './Homepagecomponent/BannerProducts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react';
import Link from "next/link"
import { actioncreators } from '../State';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { getAllProducts } from '../State/actioncreators/mavaproduct';
export default function Home() {
  let dispatch = useDispatch();
  let { products } = useSelector((state) => state.mavaproducts)

  let { cart, subtotal } = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  let { addToCart, removeFromCart, clearCart } = bindActionCreators(actioncreators.default, dispatch);

  const [search, setSearch] = useState([]);
  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      const filterProduct = products?.filter(
        (item) =>
          item.name
            .toLowerCase()
            .search(e.target.value.toLowerCase().trim()) !== -1
      );
      setSearch(filterProduct);
    } else {
      setSearch([]);
    }
    console.log("search", search);
  };
  return (
    <div>
      <Head>
        <title>Mava.com</title>
        <meta name="description" content="Codeswear.com -wear the Code" />
        <link rel="icon" href="/codeswearcicle.png" />
      </Head>
      <BannerProducts />
      {/* search products */}
      <div className="search-products">
        <div className="container">
          <div className="search-field-title-container">
            <p className='text-3xl'>Find the best, organic and cleansing products for you at the MAVA Store</p>
            <div className="search-input-holder mb-5">
              <input
                onChange={handleSearch}
                className="search-input"
                id="quantity"
                name="quantity"
              ></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-10" />
            </div>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 justify-around">
                {search.length > 0 && <h3 className="mt-5">Search Results</h3>}
                {search.length > 0 &&
                  search.slice(0, 3).map((item) => {
                    return (
                      <div className="lg:w-1/5 md:w-1/2 p-4 hover:cursor-pointer w-full m-12 border-2 rounded-md shadow-lg">
                            <Link key={item.id} passHref={true} href={`/Product/${item.id}`}>
                            <a className="block h-48 rounded overflow-hidden pb-2">
                              <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`${item.img}`} />
                            </a>
                            </Link>
                            <hr />
                            <div className="text-center mt-4">
                              <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">{item.category}</h3>
                              <h2 className="text-gray-900 title-font text-xl font-medium">{item.name}</h2>
                              <p className="mt-1">{item.desc.slice(0,60)}...</p>
                              <p className="mt-1 text-lg">€{item.price}</p>
                            </div>
                          </div>
                        )
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl">Featured Products</h1>
          <div className="flex flex-wrap -m-4 justify-around">
            {products.length === 0 ? <h1 className='text-2xl font-bold flex justify-center items-center text-gray-500'>Loading</h1> : products.map((item) => {
              return (
                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 hover:cursor-pointer w-full m-12 border-2 rounded-xl shadow-lg">
                      <Link key={item.id} passHref={true} href={`/Product/${item.id}`}>
                      <a className="block h-48 rounded overflow-hidden pb-2">
                        <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`${item.img}`} />
                      </a>
                      </Link> 
                      <hr />
                      <div className=" mt-4">
                        <h2 className="text-gray-900 title-font text-xl font-medium">{item.name}</h2>
                        <div className='my-3 px-5 flex justify-between'>
                          <p className="text-lg">€{item.price}</p>
                          <div className='py-2 px-3 border-2 rounded inline-block'>
                            in stock
                          </div>
                        </div>
                        <div className="cart">
                          <div className='flex flex-row space-x-2 items-center justify-center'>
                           {cart[item.id]!=null?<> <AiFillMinusCircle onClick={() => removeFromCart({ itemcode:item.id, qty: 1 })} className='text-pink-700 cursor-pointer' /> <span>{cart[item.id].qty}</span><AiFillPlusCircle onClick={() => addToCart({ itemcode:item.id, qty: 1 })} className='text-pink-700 cursor-pointer' /></>: <button className="flex ml-4 text-white bg-pink-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={() =>{ addToCart({ itemcode: item.id, price:parseInt(item.price), qty: 1, name: item.name });
              }}>Add to Cart</button>}
                          </div>
                        </div>
                      </div>
                    </div>
                  
              )
            })}
          </div>
        </div>
      </section>

      <div className='flex justify-center my-12 mb-44'>
        <button className='go-to-cart-btn w-[80%] text-white text-center'>Go to Cart</button>
      </div>


    </div>

  )
}

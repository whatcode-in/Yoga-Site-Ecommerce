import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
// import styles from '../styles/Home.module.css'
import BannerProducts from './Homepagecomponent/BannerProducts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faIndianRupeeSign,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions, { getmugs } from "../State/actioncreators/products"
import { useEffect } from 'react';
import Link from "next/link"
import { actioncreators } from '../State';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
export default function Home() {
  let dispatch = useDispatch();
  let { mugs } = useSelector((state) => state.products)

  let { cart, subtotal } = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    dispatch(getmugs())
    setproducts([...product, ...mugs])
    console.log([...product, ...mugs]);
  }, [])
  let { addToCart, removeFromCart, clearCart } = bindActionCreators(actioncreators.default, dispatch);

  const [search, setSearch] = useState([]);
  let [product, setproducts] = useState([]);
  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      const filterProduct = product?.filter(
        (item) =>
          item.title
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
                      item.availableQty > 0 ?
                        <Link key={item._id} passHref={true} href={`/Products/${item._id}`}>
                          <div className="lg:w-1/5 md:w-1/2 p-4 hover:cursor-pointer w-full m-12 border-2 rounded-md shadow-lg">
                            <a className="block h-48 rounded overflow-hidden pb-2">
                              <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`${item.img}`} />
                            </a>
                            <hr />
                            <div className="text-center mt-4">
                              <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">{item.category}</h3>
                              <h2 className="text-gray-900 title-font text-xl font-medium">{item.title}</h2>
                              <p className="mt-1">{item.desc}</p>
                              <p className="mt-1 text-lg">₹{item.price}</p>
                              <p className="mt-1 text-lg flex justify-center">{item?.size.map(i => {
                                return <span key={i} className='border border-gray-500 px-1 mx-2 flex justify-center items-center flex-col'>{i}</span>
                              })}</p>

                              <p className="mt-2 text-lg flex justify-center">
                                {item?.color.includes("black") && <button key={"black"} className={`border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("white") && <button key={"white"} className={`border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("pink") && <button key={"pink"} className={`border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("orange") && <button key={"orange"} className={`border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("red") && <button key={"red"} className={`border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("blue") && <button key={"blue"} className={`border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("yellow") && <button key={"yellow"} className={`border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                                {item?.color.includes("green") && <button key={"green"} className={`border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                              </p>
                            </div>
                          </div>
                        </Link> : null)
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
            {product.length === 0 ? <h1 className='text-2xl font-bold flex justify-center items-center text-gray-500'>not item available</h1> : product.map((item) => {
              return (
                item.availableQty > 0 ?
                  // <Link key={item._id} passHref={true} href={`/Products/${item._id}`}>
                    <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 hover:cursor-pointer w-full m-12 border-2 rounded-xl shadow-lg">
                      <a className="block h-48 rounded overflow-hidden pb-2">
                        <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src={`${item.img}`} />
                      </a>
                      <hr />
                      <div className=" mt-4">
                        <h2 className="text-gray-900 title-font text-xl font-medium">{item.title}</h2>
                        <div className='my-3 px-5 flex justify-between'>
                          <p className="text-lg">₹{item.price}</p>
                          <div className='py-2 px-3 border-2 rounded inline-block'>
                            in stock
                          </div>
                        </div>
                        <div className="cart">
                          <div className='flex flex-row space-x-2 items-center justify-center'>
                           {cart[item._id]!=null?<> <AiFillMinusCircle onClick={() => removeFromCart({ itemcode:item._id, qty: 1 })} className='text-pink-700 cursor-pointer' /> <span>{cart[item._id].qty}</span><AiFillPlusCircle onClick={() => addToCart({ itemcode:item._id, qty: 1 })} className='text-pink-700 cursor-pointer' /></>: <button className="flex ml-4 text-white bg-pink-500 border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={() =>{ addToCart({ itemcode: item._id, price: item?.stock["black"]?.price, qty: 1, name: item.desc, variant: "black" });
              }}>Add to Cart</button>}
                          </div>
                        </div>
                      </div>
                    </div>
                  // </Link> 
                  : null)
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

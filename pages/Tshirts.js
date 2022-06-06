import Link from 'next/link'
import React from 'react'

const Tshirts = ({ res }) => {
  let { products } = res
  console.log(products);
  let count=0;
   count+=products.map(item=>{
    return item.availableQty
  })


  return (
    <section className="text-gray-600 body-font bg-">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-around">
        {products.length===0 || count==0?<h1 className='text-2xl font-bold flex justify-center items-center'>No Items available</h1>:products.map((item) => {
           return (
             item.availableQty>0?
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
                  <p className="mt-1 text-lg flex justify-center">{item?.size.map(i=>{
                    return <span key={i} className='border border-gray-500 px-1 mx-2 flex justify-center items-center flex-col'>{i}</span>
                  })}</p>

                  <p className="mt-2 text-lg flex justify-center">{item?.color.map(i=>{
                    // return <button key={i} className={`border-2 border-gray-300 ml-1 ${JSON.stringify(fun(i))}`}></button>
                    return <button key={i} className={`border-2 border-gray-300 ml-1 ${i=="black" ||i=="white"?`bg-${i}`:`bg-${i}-500`} rounded-full w-6 h-6 focus:outline-none`}></button>
                  })}</p>
                </div>
              </div>
            </Link>:null)
          })}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  // let response = await fetch(`http://192.168.52.135:3000/api/getProducts?category=T-shirts`);
  let response = await fetch(`http://localhost:3000/api/getProducts?category=T-shirts`);
  let res = await response.json();
  // console.log(res);
  return {
    props: { res }, // will be passed to the page component as props
  }
}

export default Tshirts

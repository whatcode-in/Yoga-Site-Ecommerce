import Link from 'next/link'
import React from 'react'

const Stickers = ({res}) => {
  let {products}=res
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-around">
    {products.length===0?<h1 className='text-2xl font-bold flex justify-center items-center text-gray-500'>No Items available</h1>:products.map((item) => {
            return <Link key={item._id} passHref={true} href={`/Products/${item._id}`}>
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
                  <p className="mt-1 text-lg">{item.size}</p>

                </div>
              </div>
            </Link>
          })}
      {/* <Link href={"/Products/thisrst"}>
      <div className="lg:w-1/4 md:w-1/2 p-4 hover:cursor-pointer w-full m-12 border-2 rounded-md shadow-lg">
        <a className="block h-48 rounded overflow-hidden ">
          <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="/Strickers.jpg"/>
        </a>
        <div className="text-center mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">₹499</p>
          

        </div>
      </div>
      </Link> */}
      
    </div>
  </div>
</section>
    </div>
  )
}


export async function getServerSideProps(context) {
  let response=await fetch(`http://localhost:3000/api/getProducts?category=Stickers`);
  let res=await response.json();
  // console.log(res);
  return {
    props: {res}, // will be passed to the page component as props
  }
}

export default Stickers
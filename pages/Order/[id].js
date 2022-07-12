import React, { useEffect } from 'react'
import { useRouter } from "next/router"
import { useDispatch } from 'react-redux'
import { getOrder } from '../../State/actioncreators/Order'
import { useSelector } from 'react-redux'
const Order = () => {
  let router = useRouter()
  let { id } = router.query
  let dispatch = useDispatch();

  let { order } = useSelector((state) => state.order)
  useEffect(() => {
    if (order == null) {
      dispatch(getOrder(id));
    }
  }, [])

  console.log(order);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Codeswear.com</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order id: #1829392</h1>
            <div className="flex mb-4 justify-between text-center">
              <a className="flex-grow border-b-2 mx-auto py-2 text-lg px-1 w-1/3">Description</a>
              <a className="flex-grow border-b-2 mx-auto py-2 text-lg px-1 w-1/3">Quantity</a>
              <a className="flex-grow border-b-2 mx-auto  py-2 text-lg px-1 w-1/3">Price</a>
            </div>
            {
              order!==null &&
              Object.keys(order.products).map((itemcode) => {
                return <div className="flex border-t border-gray-200 py-2 text-center" key={itemcode}>
                  <span className="text-gray-500 flex-grow border-b-2 mx-auto py-2 px-1 w-1/3">{order.products[itemcode].name} {order.products[itemcode].size==null?order.products[itemcode].variant:`(${order.products[itemcode].size}/${order.products[itemcode].variant})`}</span>
                  <span className="text-gray-500 flex-grow border-b-2 mx-auto py-2 px-1 w-1/3">{order.products[itemcode].qty}</span>
                  <span className="text-gray-500 flex-grow border-b-2 mx-auto py-2 px-1 w-1/3">₹{order.products[itemcode].qty*order.products[itemcode].price}</span>
                </div>
              })
            }


            <div className="flex items-center flex-col space-y-3">
              <span className="title-font font-medium text-2xl text-gray-900">₹{order.amount}</span>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-fit">Track Order</button>

            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export default Order

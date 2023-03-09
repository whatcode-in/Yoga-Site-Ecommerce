import React from "react"

const Orders = () => {

    const [userOrders,setUserOrders] = React.useState([])

    const getOrders = async () => {
        let token = sessionStorage.getItem('Token')
    
        if(token){
            let orders = await fetch(`https://blushing-plum-belt.cyclic.app/api/admin/get-order/${token}`, {
                method: 'GET'
            })
            let ordersResponse = await orders.json()
            console.log(ordersResponse['allOrders'])
             setUserOrders(ordersResponse['allOrders'])
        }
    }

    React.useEffect(() => {
        getOrders()
    },[])


    return (
      <div style={{margin: "5rem"}} className="flex flex-col items-center justify-center p-20 text-lg">
       <div className="font-bold text-2xl">Your Orders:</div>
       
       { userOrders.map((item) => {
            return (
                <div className="mt-8">
                <div className="pb-8 border-solid border-black border-b-4">
                   <div className="mb-2"><span className="font-medium">Name:</span> {item.name}</div>
                   <div className="mb-2"><span className="font-medium">Email:</span> {item.email}</div>
                   <div className="mb-2"><span className="font-medium">Phone:</span> {item.phone}</div>
                   <div className="mb-2"><span className="font-medium">Address:</span> {item.addr}</div>
                   <div className="mb-2"><span className="font-medium">Pincode:</span>  {item.pincode}</div>
                   <div className="mb-2"><span className="font-medium">City:</span>  {item.city}</div>
                   <div className="mb-2"><span className="font-medium">State:</span>  {item.state}</div>
                   <div className="mb-2"><span className="font-medium">Ordered Items:</span>  {item.orderedItems.map(product => {
                    return(
                        <div className="ml-8">
                          <div className="text-base mb-2"><span className="font-medium">Name:</span> {product.name}</div>
                          <div className="text-base mb-2"><span className="font-medium">Price:</span> {product.price}</div>
                          <div className="text-base mb-2"><span className="font-medium">Quantity:</span> {product.quantity}</div>
                        </div>
                    )
                   })}</div>
                 
                </div>
                </div>
            )
       })

       }

      </div>
    )
  }
  
  export default Orders
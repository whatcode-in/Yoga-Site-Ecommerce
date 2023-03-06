import { ADDPRODUCT, DELETEPRODUCTBYID, GETALLTPRODUCTS, GETPRODUCTBYCATEGORY, GETPRODUCTBYID, UPDATEPRODUCT } from "../../Constents";

let  getAllProducts = () => async (dispatch) => {
  console.log(process.env.NEXT_PUBLIC_HOST);
    let response = await fetch(`https://splendid-belt-elk.cyclic.app/api/admin/products`);
    let products = await response.json();
    console.log("in actions",products);
    dispatch({ type: GETALLTPRODUCTS, payload: products.data })
}
let  getProductById = (id) => async (dispatch) => {
  let response=await fetch(`https://splendid-belt-elk.cyclic.app/api/admin/product/${id}`,{
      method: 'GET', // or 'PUT'
    });
    let res=await response.json()
    console.log(res,"singleProduct");
  dispatch({ type: GETPRODUCTBYID, payload: res.product})
}
let  deleteProductById = (id) => async (dispatch) => {
    let response=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/yoga/deleteProduct`,{
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      });
      let res=await response.json()
  
    dispatch({ type: DELETEPRODUCTBYID, payload: {...res,id }})
}
let  updateProduct = (data) => async (dispatch) => {
    let response=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/yoga/editProduct`,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id:data.id,data:data}),
      });
      let res=await response.json()
  
    dispatch({ type: UPDATEPRODUCT, payload: {data,success:res.success}})
}

let  getProductByCategory = (category) => async (dispatch) => {
  let response=await fetch(`https://splendid-belt-elk.cyclic.app/api/admin/products/${category}`,{
      method: 'GET', // or 'PUT'
    });
    let res=await response.json()
    console.log("in the end",res);
  dispatch({ type: GETPRODUCTBYCATEGORY, payload: res})
}
let  addProduct = (data) => async (dispatch) => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/yoga/addProduct`,{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  let res = await response.json(data);

  dispatch({ type: ADDPRODUCT, payload: res})
}

export {getAllProducts,deleteProductById,updateProduct,getProductById,getProductByCategory,addProduct}
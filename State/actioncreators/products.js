export let  gettshirts = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`http://localhost:3000/api/getProducts?category=T-shirts`);
    let {products} = await response.json();
    dispatch({ type: "GETALLTSHIRTS", payload: products })
}
export let  gethoodies = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`http://localhost:3000/api/getProducts?category=Hoodies`);
    let {products} = await response.json();
    dispatch({ type: "GETALLHOODIES", payload: products })
}


export default {gettshirts,gethoodies}
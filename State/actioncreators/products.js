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
export let  getmugs = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`http://localhost:3000/api/getProducts?category=Mugs`);
    let {products} = await response.json();
    dispatch({ type: "GETALLMUGS", payload: products })
}
export let  getstickers = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`http://localhost:3000/api/getProducts?category=STICKERS`);
    let {products} = await response.json();
    dispatch({ type: "GETALLSTCIKERS", payload: products })
}


export default {gettshirts,gethoodies,getmugs,getstickers}
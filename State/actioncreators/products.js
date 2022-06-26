import { GETALLHOODIES, GETALLMUGS, GETALLSTCIKERS, GETALLTSHIRTS} from "../../Constents";

export let  gettshirts = () => async (dispatch) => {
    // console.log(process.env.NEXT_PUBLIC_HOST);
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProducts?category=T-shirts`);
    let {products} = await response.json();
    dispatch({ type: GETALLTSHIRTS, payload: products })
}
export let  gethoodies = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProducts?category=Hoodies`);
    let {products} = await response.json();
    dispatch({ type: GETALLHOODIES, payload: products })
}
export let  getmugs = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProducts?category=Mugs`);
    let {products} = await response.json();
    dispatch({ type: GETALLMUGS, payload: products })
}
export let  getstickers = () => async (dispatch) => {
    // console.log(data);
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProducts?category=STICKERS`);
    let {products} = await response.json();
    dispatch({ type:GETALLSTCIKERS, payload: products })
}


export default {gettshirts,gethoodies,getmugs,getstickers}
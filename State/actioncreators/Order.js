

export let  getOrder = (id) => async (dispatch) => {
    // console.log(process.env.NEXT_PUBLIC_HOST);
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrder?id=${id}`);
    let {order} = await response.json();
    dispatch({ type: "GETORDER", payload: order })
}
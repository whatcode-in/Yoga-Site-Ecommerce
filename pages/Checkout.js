import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {
  AiOutlineClose,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { actioncreators } from "../State";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Checkout = () => {
  let { cart, subtotal } = useSelector((state) => state.cart);
  let { user } = useSelector((state) => state.user);

  let dispatch = useDispatch();
  let [loading,setLoading] = useState(false)
  let router = useRouter();
  let { addToCart, removeFromCart } = bindActionCreators(
    actioncreators.default,
    dispatch
  );

  let [data, setdata] = useState({
    name: "",
    email: "",
    addr: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  let [phone, setPhone] = useState("");

  let handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  let handlepay = async () => {
    setLoading(true)
    let cartArray1 = [];
    let cartArray2 = [];

    Object.keys(cart).map((itemcode) => {
      let newObj1 = {
        name: cart[itemcode].name,
        price: cart[itemcode].price * 100,
        quantity: cart[itemcode].qty,
        id: itemcode,
        productImage: `https://blushing-plum-belt.cyclic.app/api/admin/photo/${itemcode}`,
      };

      let newObj2 = {
        name: cart[itemcode].name,
        price: cart[itemcode].price * 100,
        quantity: cart[itemcode].qty,
        id: itemcode,
      };
      cartArray1.push(newObj1);
      cartArray2.push(newObj2);
    });

    const templateParams = {
      from_name: "mava vida",
      to_name: data.name,
      name: data.name,
      email: data.email,
      phone: phone,
      address: data.addr,
      pincode: data.pincode,
      country: data.country,
      city: data.city,
      state: data.state,
      ordered_items: JSON.stringify(cartArray2),
      to_email: data.email,
      reply_to: "info@mavavida.com",
    };

    emailjs
      .send(
        "service_ax2i22k",
        "template_qu8yhcs",
        templateParams,
        "KDlc-b-ZVfV0uovZs"
      )
      .then(
        function (response) {
          console.log("testing order mail");
          console.log("SUCCESS!", response.status, response.text);
          sendSecondMail(cartArray1, cartArray2);
        },
        function (err) {
          console.log("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error in placing order",
          });
          return null;
        }
      );
  };

  function sendSecondMail(cartArray1, cartArray2) {
    const templateParams = {
      from_name: "admin",
      to_name: data.name,
      name: data.name,
      email: data.email,
      phone: phone,
      address: data.addr,
      pincode: data.pincode,
      country: data.country,
      city: data.city,
      state: data.state,
      ordered_items: JSON.stringify(cartArray2),
      to_email: "info@mavavida.com",
      // reply_to: "info@mavavida.com",
    };

    emailjs
      .send(
        "service_ax2i22k",
        "template_p9ah0z8",
        templateParams,
        "KDlc-b-ZVfV0uovZs"
      )
      .then(
        function (response) {
          console.log("testing order mail");
          console.log("SUCCESS!", response.status, response.text);
         
          connectToStripe(cartArray1);
          setLoading(false)
        },
        function (err) {
          console.log("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error in booking",
          });
          return null;
        }
      );
  }

  function connectToStripe(cartArray1) {
    fetch("https://blushing-plum-belt.cyclic.app/api/admin/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderedItems: cartArray1,
        paymentMade: false,
        name: data.name,
        email: data.email,
        phone: phone,
        addr: data.addr,
        pincode: data.pincode,
        city: data.city,
        state: data.state,
        country: data.country,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((e) => Promise.reject(e));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }

  return (
    <div className="container m-auto w-5/6" style={{marginTop: "12rem"}}>
      <h1 className="text-center font-bold text-3xl">CheckOut</h1>
      <h2 className="text-xl font-semibold my-2">1.&nbsp; Deliver Details</h2>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handlechange}
              value={data.name}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handlechange}
              value={data.email}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="">
            <label
              htmlFor="addr"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              Address
            </label>
            <textarea
              id="addr"
              name="addr"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handlechange}
              value={data.addr}
            ></textarea>
          </div>
        </div>
        {/* <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600 mb-1">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} value={data.phone}/>
          </div>
        </div> */}
        <div className="p-2 w-1/2">
          <div className="">
            <label
              htmlFor="phone"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              Phone
            </label>
            <PhoneInput
              defaultCountry="ES"
              id="phone"
              name="phone"
              value={phone}
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={setPhone}
            />
            {/* <input type="phone" id="phone" name="phone" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} value={data.phone}/> */}
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handlechange}
              value={data.pincode}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label
              htmlFor="city"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={data.city}
              onChange={handlechange}
            />
          </div>
          <div className="">
            <label
              htmlFor="country"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={data.country}
              onChange={handlechange}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label
              htmlFor="state"
              className="leading-7 text-sm text-gray-600 mb-1"
            >
              State / Province
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={data.state}
              onChange={handlechange}
            />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-8">2.&nbsp; Review Cart items</h2>

      <div className="sidecar bg-green-50 mb-10 mt-4">
        <div className=" px-10 py-6 ">
          {/* <ol className={`list-decimal flex "flex-col"> */}
          <ol
            className={`list-decimal flex ${
              Object.keys(cart).length > 5
                ? "flex-wrap justify-around m-5"
                : "flex-col"
            }`}
          >
            {Object.keys(cart).length === 0 ? (
              <div className="my-3">Your cart is empty </div>
            ) : (
              Object.keys(cart).map((itemcode) => {
                // console.log(item);
                return (
                  <li key={`${itemcode}`}>
                    <div className="flex my-3 space-x-5">
                      <div className="p-3">
                        {cart[itemcode].name}
                        <img
                          className="w-[25%]"
                          src={`https://blushing-plum-belt.cyclic.app/api/admin/photo/${itemcode}`}
                        />
                      </div>
                      <div className="flex flex-row space-x-2 items-center justify-center">
                        <AiFillMinusCircle
                          onClick={() => removeFromCart({ itemcode, qty: 1 })}
                          className="text-green-700 cursor-pointer"
                        />{" "}
                        <span>{cart[itemcode].qty}</span>
                        <AiFillPlusCircle
                          onClick={() => addToCart({ itemcode, qty: 1 })}
                          className="text-green-700 cursor-pointer"
                        />
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ol>
          <div className="my-3 font-bold text-center">Amount: €{subtotal}</div>
          <div className="flex justify-center">
            <button
              className={`flex text-white  border-0 text-sm sm:text-base py-2 px-2 md:px-6 focus:outline-none hover:bg-green-600 rounded bg-green-500`}
              onClick={handlepay}
            >
              {!loading ? "Pay Now" : "loading..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

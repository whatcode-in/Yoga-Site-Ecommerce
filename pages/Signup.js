import React from "react";
import { useAuthValue } from "../authContext";
import { database } from "../firebaseconfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Swal from "sweetalert2";

export default function SignUp() {
  const { currentUser } = useAuthValue();
  let auth = getAuth();
  let googleAuthProvider = new GoogleAuthProvider();

  const collectionReference = collection(database, "users");

  const [data, setData] = React.useState({
    email: "",
    password: "",
    name: "",
    confirmEmail: "",
  });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function loginWithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then((response) => {
        console.log(
          "user google: ",
          response.user["email"],
          response.user["displayName"]
        );
        sendSignUpMail(response.user["email"], response.user["displayName"]);

        addDoc(collectionReference, {
          name: response.user["displayName"],
          email: response.user["email"],
        })
          .then(() => {
            console.log("user: ", data.name, data.email);
          })
          .catch((error) => console.log(error.message));

        Swal.fire({
          icon: "success",
          title: "Sign up with google successfull",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function signUp() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphaRegex = /[a-zA-Z]/;
    const numRegex = /[0-9]/;

    if (data.email == "" || data.password == "" || data.confirmEmail == "") {
      Swal.fire({
        icon: "warning",
        text: "Please enter email, confirm email and password",
      });
      return;
    }

    if (data.password.length < 6) {
      Swal.fire({
        icon: "warning",
        text: "Password must be aleast 6 charachters",
      });
      return;
    }

    if (!numRegex.test(data.password) || !alphaRegex.test(data.password)) {
      Swal.fire({
        icon: "warning",
        text: "Password must be alphanumeric",
      });
      return;
    }

    if (!emailRegex.test(data.email)) {
      Swal.fire({
        icon: "warning",
        text: "Please enter a valid email address",
      });
      return;
    }

    if (data.email != data.confirmEmail) {
      Swal.fire({
        icon: "warning",
        text: "Email and confirm email should match",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        sendSignUpMail(response.user["email"], response.user["displayName"]);

        addDoc(collectionReference, {
          name: data.name,
          email: data.email,
        })
          .then(() => console.log("user: ", data.name, data.email))
          .catch((error) => console.log(error.message));

        Swal.fire({
          icon: "success",
          title: "Sign up successfull",
        });

        data.name = "";
        data.email = "";
        data.confirmEmail = "";
        data.password = "";
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `error ${error}`,
        });
      });
  }

  function sendSignUpMail(email, name) {
    emailjs
      .send(
        "service_ax2i22k",
        "template_u4k0gyi",
        {
          to_name: name,
          to_email: email,
          reply_to: "info@mavavida.com",
        },
        "KDlc-b-ZVfV0uovZs"
      )
      .then(
        function (response) {
          console.log("testing 11");
          console.log("SUCCESS!", response.status, response.text);
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

  return (
    <div
      className="w-full max-w-lg px-5 m-auto my-20 sign-up-container"
      style={{ marginTop: "10rem" }}
    >
      <div className="text-center text-4xl font-medium my-4">Sign Up</div>
      <div className="flex flex-wrap -mx-3 mb-6 space-y-2 md:space-y-0">
        <div className="w-full px-3 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            className="appearance-none w-full block text-gray-700 border-2 border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
            id="fname"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Confirm Email
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
            id="email"
            name="confirmEmail"
            type="email"
            value={data.confirmEmail}
            onChange={handleChange}
          />
        </div>

        <div className="w-full px-3">
          <label
            className="blocktracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-full px-3">
          {/* <label
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="cpassword"
        >
          Confirm passwrod
        </label> */}
          {/* <input
          className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
          id="cpassword"
          name="cpassword"
          type="password"
          value={data.cpassword}
          onChange={handlechange}
        /> */}
        </div>

        <button
          onClick={signUp}
          className="mx-3 w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700 sign-button"
        >
          Sign up
        </button>

        <div
          className="log-in-with-google-sign-up mx-3 mt-4"
          onClick={loginWithGoogle}
        >
          <div className="google-img-container mr-2">
            <img src="google.png" alt="" width="20px" height="10px" />
          </div>
          Login with Google
        </div>

        <p className="text-center w-full text-base my-2 sign-up-text">
          Already have an Account? &nbsp;
          <Link href={"/Login"}>
            <a className="font-medium text-indigo-500  hover:underline">
              LogIn
            </a>
          </Link>
        </p>

        {/* <button onClick={testMail}>Test mail</button> */}
      </div>
    </div>
  );
}

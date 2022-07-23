
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
// };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdq-XZHG21phwSEjAHKqA2HvxbPI_OtL4",
  authDomain: "yoga-site-posts.firebaseapp.com",
  projectId: "yoga-site-posts",
  storageBucket: "yoga-site-posts.appspot.com",
  messagingSenderId: "65315338198",
  appId: "1:65315338198:web:b247c4e6cfcc70c4da1677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db= getFirestore(app)
export const auth = getAuth(app);


export const logInWithEmailAndPassword = async (email, password) => {
  try {
    let res=await signInWithEmailAndPassword(auth, email, password);
  //   console.log(res.UserCredentialImpl);
  } catch (err) {
    console.error(err);
  //   alert(err.message);
    return false
  }
  return true
};


export const registerWithEmailAndPassword = async (data) => {
  try {
    console.log("herehe in firebase");
    const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = res.user;
    console.log(user);
    let responce =await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      ...data
    });
  } catch (err) {
    console.error(err);
    // alert(err.message);
    return false
  }
 console.log(responce);
  return true
};

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
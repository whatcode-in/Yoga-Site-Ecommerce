import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOOGiyVTK23-aD1JyAhtUSENOouQfYZd4",
  authDomain: "yoga-site-bf284.firebaseapp.com",
  projectId: "yoga-site-bf284",
  storageBucket: "yoga-site-bf284.appspot.com",
  messagingSenderId: "734015506934",
  appId: "1:734015506934:web:0b6221466791ef80191fd7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
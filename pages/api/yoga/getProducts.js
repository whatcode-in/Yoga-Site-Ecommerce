import { db } from "../../../firebaseconfig";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export default async function handler(req, res) {
  try {
    console.log("start");
    let products = collection(db, "product")
    let responce = await getDocs(products);
    console.log("end");
    return res.status(200).json({ products: responce.docs.map(doc => ({ ...doc.data(), id: doc.id })), success: true })
  }
  catch (error) {
    return res.status(200).json({ success: false, error: error.msg })
  }

}
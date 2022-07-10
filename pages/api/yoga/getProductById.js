import { db } from "../../../firebaseconfig";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
} from "firebase/firestore";

export default async function handler(req, res) {
  try {

    let product = doc(db, "product",req.body)
    let responce = await getDoc(product);
    return res.status(200).json({ product: {...responce.data(), id: req.body }, success: true })
  }
  catch (error) {
    return res.status(200).json({ success: false, error: error.message })
  }

}
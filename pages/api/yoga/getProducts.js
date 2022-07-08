import { db } from "../../../firebaseconfig";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export default async function handler(req, res) {
  try {
    let products = collection(db, "product")
    let responce = await getDocs(products);
    return res.status(200).json({ data: responce.docs.map(doc => ({ ...doc.data(), id: doc.id })), success: true })
  }
  catch (error) {
    return res.status(200).json({ success: false, error: error.msg })
  }

}
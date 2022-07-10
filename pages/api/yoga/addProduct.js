import { db } from "../../../firebaseconfig";
import {
    addDoc,
  collection,
} from "firebase/firestore";

export default async function handler(req, res) {
    if (req.method==='POST') {
  try {
    let products = collection(db, "product")
    let responce = await addDoc(products,req.body);
    return res.status(200).json({ data:responce.id, success: true })
  }
  catch (error) {
    return res.status(200).json({ success: false, error: error.message })
  }
}else{
    return res.status(200).json({ success: false, error: "this method is not allowed"})
}

}
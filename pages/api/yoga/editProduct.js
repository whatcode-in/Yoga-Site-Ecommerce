import { db } from "../../../firebaseconfig";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

export default async function handler(req, res) {
    if (req.method==='POST') {
  try {
    let product = doc(db, "product",req.body.id)
    let responce = await updateDoc(product,req.body.data);
    return res.status(200).json({ data: responce, success: true })
  }
  catch (error) {
    return res.status(200).json({ success: false, error: error.msg })
  }
}else{
    return res.status(200).json({ success: false, error: "this method is not allowed"})
}

}
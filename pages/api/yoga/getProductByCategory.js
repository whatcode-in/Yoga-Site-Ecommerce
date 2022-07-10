import { db } from "../../../firebaseconfig";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default async function handler(req, res) {
  try {
    console.log(req.body);
    const products = query(collection(db, "product"), where("category", "==", req.body));
    let responce = await getDocs(products);
    console.log("berfore end", responce.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    return res.status(200).json({ products: responce.docs.map(doc => ({ ...doc.data(), id: doc.id })), success: true })
  }
  catch (error) {
    return res.status(200).json({ success: false, error: error.message })
  }

}
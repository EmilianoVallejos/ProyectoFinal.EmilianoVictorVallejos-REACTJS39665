import React from "react";
import { useContext, useState } from "react";
import {db} from "../firebase";
import { collection, getDocs, where, documentId } from "firebase/firestore";
import CartContext from "./CartContext/CartContext";
import CheckoutForm from "./CheckoutForm";
import { Timestamp, query, writeBatch } from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearcart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
    } 
    const batch = writeBatch(db);
    const outOfStock = [];
    const ids = cart.map(prod => prod.id);
    const productsRef = collection(db, "products");
    const productsAddedFromFirestore = await getDocs(
      query(productsRef, where(documentId(), "in", id)));
  };
  const {docs}= productsAddedFromFirestore

  docs.forEach(doc => {
      const dataDoc = doc.data()
      const stockDb = dataDoc.stockDb

      const productAddedToCart = cart.find(prod => prod.id === doc.id)
      const prodQuantity= productAddedToCart?.quantity

      if(stockDb >= prodQuantity) {
          batch.update(doc.ref,{stock: stock-prodQuantity})
      }else{
          outOfStock.push({id: doc.id, ...dataDoc})
      }
  })

  if(outOfStock.length === 0) {
      await batch.commit()

      const orderRef = collection(db, "orders")

      const orderAdded = await addDoc(orderRef, objOrder)

      setOrderId(orderAdded.id)
      clearCart()
  } else {
      console.error("Hay productos que estan fuera de stock")

  }
} catch(error){
  console.log(error);
} finally {
  setLoading(false);
}
  if (loading) {
    return <h1>Se está generando su orden. espere unos segundos... </h1>;
  }
  if (orderId) {
      return <h1>El id de su orden es: {orderId} </h1>
      console.log(orderId);
  }
  return (
    <div>
      <h1>checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );

export default Checkout;

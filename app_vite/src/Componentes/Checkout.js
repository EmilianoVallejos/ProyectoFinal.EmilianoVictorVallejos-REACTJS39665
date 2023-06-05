import React from "react";
import { useContext, useState } from "react";
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
    } catch {
      console.log("ok");
    }
    const batch = writeBatch(db);
    const outOfStock = [];
    const ids = cart.map((prod) => prod.id);
    const productsRef = collection(db, "products");
    const productsAddedFromFirestore = await getDocs(
      query(productsRef, where(documentId(), "in"))
    );
  };
  if (loading) {
    return <h1>Se está generando su orden. espere unos segundos... </h1>;
  }
  if (orderId) {
    return <h1>El id de su orden es: {orderId} </h1>;
  }
  return (
    <div>
      <h1>checkout</h1>
      <Checkoutform onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;

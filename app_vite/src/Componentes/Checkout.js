import React, { useEffect } from "react";
import { useContext, useState } from "react";
import {db} from "../firebase";
import { collection, getDocs, where, documentId, addDoc } from "firebase/firestore";
import CartContext from "./CartContext/CartContext";
import CheckoutForm from "./CheckoutForm";
import { Timestamp, query, writeBatch } from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order,setOrder] = useState({});
  const [orderId,setOrderId] = useState(null)
  const [date, setDate] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  const ordersCollectionRef = collection(db, "orders");

  const createOrder = async ({ name, phone, email }) => {
    
    const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total(),
        date: Timestamp.fromDate(new Date()),
    };
   
    setOrders(
      addDoc(ordersCollectionRef,objOrder)
    )

    setDate(objOrder.date)

    clearCart()
    getOrders()

    setLoading(true)
    

  };

  const getOrders = async () => {
    let ordersCollection = await getDocs(ordersCollectionRef)
    setOrders(ordersCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    )
  }

  const getOrder = async () => {
    try{
      setOrder(orders.find((order) => order.date.nanoseconds == date.nanoseconds))
      setOrderId(orders.find((order) => order.date.nanoseconds == date.nanoseconds).id)
    }catch{
      console.log("Obteniendo pedido")
    }
  }

  useEffect(() => {
    getOrder()
  }, [orders])

  return(
    <div>
      {loading ? <div>
                    <h3>Gracias por tu compra!</h3>
                    <h5>Tu id de pedido es:  {orderId}</h5> 
                </div> : <><h1>checkout</h1>
      <CheckoutForm onConfirm={createOrder} /></>}
      
    </div>
  )

}

export default Checkout;
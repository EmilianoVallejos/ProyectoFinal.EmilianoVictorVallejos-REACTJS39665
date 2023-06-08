import { createContext, useState } from "react"
import React from 'react'
import { toast } from 'react-toastify';

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  console.log(cart)

  const addItem = (item, quantity) => {
    toast.success("Agregado al carrito!", {autoClose: 600, theme: "colored", hideProgressBar: true, closeOnClick: false,})
    if (!isInCart(item.id)){
      setCart(prev => [...prev, {...item, quantity}])
    } else {
      console.error ('El producto ya fue agregado')
    }
  }

  const removeItem = (Id) => {
    toast.warn ("Producto removido!", {autoClose: 600, theme: "colored", hideProgressBar: true, closeOnClick: false,} )
    const cartUpdated = cart.filter(prod => prod.id !== Id)
    setCart(cartUpdated)
  }

  const clearCart = () =>{
    setCart([])
  }

  const isInCart = (Id) => {
    return cart.some(prod => prod.id === Id)
  }

  const total = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total        
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,total}}>
      { children}
    </CartContext.Provider>
  )
}
export default CartContext
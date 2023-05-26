import { createContext, useState } from "react"
import React from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  console.log(cart)

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)){
      setCart(prev => [...prev, {...item, quantity}])
    } else {
      console.error ('El producto ya fue agregado')
    }
  }

  const removeItem = (Id) => {
    const cartUpdated = cart.filter(prod => prod.id !== Id)
    setCart(cartUpdated)
  }

  const clearCart = () =>{
    setCart([])
  }

  const isInCart = (Id) => {
    return cart.some(prod => prod.id === Id)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
      { children}
    </CartContext.Provider>
  )
}
export default CartContext
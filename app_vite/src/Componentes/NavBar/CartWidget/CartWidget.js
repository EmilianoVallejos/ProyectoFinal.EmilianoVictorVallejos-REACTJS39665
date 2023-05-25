import React from 'react'
import Cart from '../../Cart'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)
  return (
    <Link to='/Cart' style={{display: totalQuantity> 0 ? 'block': 'none'}}>
      <img src={cart} alt='cart-widget'/>
      { totalQuantity }
    </Link>
  )
}

export default CartWidget

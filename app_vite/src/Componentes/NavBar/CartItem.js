import React from 'react'
import Cart from '../Cart';
import CartContext from '../CartContext/CartContext';
import CartWidget from './CartWidget/CartWidget'


export const CartItem = ({name, price, quantity, image, id}) => {

  const {removeItem} = useContext (CartContext)

  

  return (
      <div className='productsContainer'>
          
          <picture> <img src={image} /> </picture>
          <p className='name'>{name}</p>
          <p className='text'>Precio x unidad: {price}</p>
          <p className='text'>Cantidad: {quantity}</p>
          <button onClick={() => removeItem(id)}> X </button>
      </div>
  )
}

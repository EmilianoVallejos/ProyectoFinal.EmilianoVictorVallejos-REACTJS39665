import React from 'react';
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import CartWidget from './CartWidget/CartWidget'


export const CartItem = ({title, price, quantity, image, id}) => {

  const {removeItem} = useContext (CartContext)

  

  return (
      <div className='productsContainer'>
          
          <picture> <img src={image} /> </picture>
          <p className='name'>{title}</p>
          <p className='text'>Precio x unidad: {price}</p>
          <p className='text'>Cantidad: {quantity}</p>
          <button onClick={() => removeItem(id)}> X </button>
      </div>
  )
}

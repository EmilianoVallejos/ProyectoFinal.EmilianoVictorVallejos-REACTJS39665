import { useContext, useState } from 'react'
import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState (0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity)=> {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }
  
  return (
    <article>
      <header>
        <h2>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name}/>
      </picture>
      <section>
        <p>
          Categoria: {category}
        </p>
        <p>
          Descripcion:{description}
        </p>
        <p>
          Precio: ${price}
        </p>
      </section>
      <footer>
        {
          quantityAdded > 0 ? (
            <Link to='./Cart.js'>Terminar Compra</Link>          
          ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
          )
        }
      </footer>
    </article>
  )
}

export default ItemDetail

import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
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
          <ItemCount/>
      </footer>
    </article>
  )
}

export default ItemDetail

import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, title, image, price, stock, description}) => {
    return (
        <article>
            <header>
                <h2> 
                    {title}
                </h2>
            </header>
            <picture> 
                <img src= {image} alt={title}/>
            </picture>    
            <section>
                <p>
                    Descripcion del producto: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Detalles</Link>
            </footer>    
        </article>
    )
}

export default Item

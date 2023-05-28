import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({description, title, image, price, stock}) => {
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
                    Precio: ${price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${description}`}>Detalles</Link>
            </footer>    
        </article>
    )
}

export default Item

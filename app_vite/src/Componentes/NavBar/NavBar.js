import React from 'react'
import {Link, NavLink} from "react-router-dom"
import CartContext, { CartProvider } from '../CartContext/CartContext'
import {BsFillCartFill} from "react-icons/bs";

const NavBar = () => {
    return (<nav className="header__nav">
            <NavLink to="/">
                <h1 className="header__title">ANIMALUNGO</h1>
            </NavLink>
            <CartProvider>
            <div>
                <Link to= {"/category/promociones"} className="header__link link">Promociones</Link>
                <Link to= {"/carrito"} className="header__link link">Más productos</Link>
                <Link to= {"/Cart"} className="header__link link"> <BsFillCartFill /> </Link>
            </div>
            </CartProvider>
            </nav>)
        }
        
export default NavBar
import React from 'react'
import {Link, NavLink} from "react-router-dom"
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="header__nav">
            <NavLink to="/">
                <h1 className="header__title">ANIMALUNGO</h1>
            </NavLink>
            <div>
                <Link to= {"/category/promociones"} className="header__link link">Promociones</Link>
                <Link to= {"/category/alimento balanceado"} className="header__link link">Alimento Balanceado</Link>
                <Link to= {"/carrito"} className="header__link link">Carrito</Link>
            </div>
            <CartWidget/>
        </nav>
        )
    }
export default NavBar
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Cart from './Componentes/Cart'
import Checkout from './Componentes/Checkout'
import { CartProvider } from './Componentes/CartContext/CartContext'

function App(){
    return (<div>
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting= {"Productos por categoria"}/>}/>
              <Route path='/item/:Id' element={ <ItemDetailContainer/> } />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </CartProvider>   
        </BrowserRouter>
      </div> );
}

export default App

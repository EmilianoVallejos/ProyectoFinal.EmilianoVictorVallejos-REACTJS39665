import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Cart from './Componentes/Cart'
import Checkout from './Componentes/Checkout'
import Footer from './Componentes/Footer'
import { CartProvider } from './Componentes/CartContext/CartContext'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
    return (<div>
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting= {"Productos por categoria"}/>}/>
              <Route path='/item/:Id' element={ <ItemDetailContainer/> } />
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Checkout' element={<Checkout/>} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            <ToastContainer/>
            <Footer/>
          </CartProvider>   
        </BrowserRouter>
      </div> );
}

export default App

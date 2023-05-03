import React from 'react'
import Footer from './Componentes/Footer' 
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer'
import CartWidget from './Componentes/NavBar/CartWidget/CartWidget'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer'


function App() {
  
  return ( 
  <BrowserRouter>  
      <NavBar/>
      <Routes>
        <Route path= "/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/Item/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>   
      <Footer/>  
  </BrowserRouter>
)
}

export default App

import React from 'react'
import Header from './Componentes/Header'
import Main from './Componentes/Main'
import Footer from './Componentes/Footer' 
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer'
import CartWidget from './Componentes/NavBar/CartWidget/CartWidget'


function App() {
  
  return ( 
<>  
    <Header/>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido"}/>
    <CartWidget/>
    <Main/>
    <Footer/>  
</>
)
}

export default App

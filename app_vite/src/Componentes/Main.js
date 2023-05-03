import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom"

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={ <p>Home</p>}/>
      <Route path="/categoria1" element={ <p>Cat 1</p>}/>
      <Route path="/categoria2" element={ <p>Cat 2</p>}/>
      <Route path="/carrito" element={ <p>Cat 3</p>}/>
    </Routes>
  )
}

export default Main





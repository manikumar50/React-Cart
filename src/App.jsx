import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import Cart from './assets/components/Cart'
import Header from './assets/components/Header'
import { useState } from 'react'
function App() {
const [cart,setcart]=useState([])
  
  return (
    <>
    <div className="row">
      <BrowserRouter>
      <Header cart={cart}/>
      <Routes>
        <Route path='/' element={<Home cart={cart} setcart={setcart}/>}/>
        <Route path='cart' element={<Cart cart={cart} setcart={setcart}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

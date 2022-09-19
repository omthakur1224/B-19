import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/Products'
import CartItems from './pages/CartItems'
import RequireAuth from './hoc/RequireAuth'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='' element={<Products/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='cart' element={<RequireAuth><CartItems/></RequireAuth>}/>
      </Routes>
    </div>
  )
}

export default App

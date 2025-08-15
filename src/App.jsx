import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CreateProduct from './components/CreateProduct'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/createProduct' element={<CreateProduct/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
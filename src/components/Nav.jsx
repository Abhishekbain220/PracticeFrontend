import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'
import { UserContext } from '../utils/UserContext'
import axios from '../utils/axios.jsx'

const Nav = () => {
  let navigate = useNavigate()
  let { products, setProducts, getProducts, deleteProduct,title,rate,setRate,setTitle,setRateupdateSwitch, setUpdateSwitch, createSwitch, setCreateSwitch  } = useContext(ProductContext)
  let { username, setUsername, email, setEmail, password, setPassword,token,setToken } = useContext(UserContext)
  
  let formSwitch=()=>{
    setCreateSwitch(true) 
    setUpdateSwitch(false)
  }

  let logout=async()=>{
        try {
            let logoutUser=await axios.get("user/logout")
            localStorage.removeItem("authToken")
            setToken(null)
            navigate("/")

        } catch (error) {
            console.log(error.response.data.message)
        }
    }
  return (
    <div>
        <nav className='gap-4 flex'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {token && <Link onClick={formSwitch} to="/createProduct">Create Product</Link>}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
            <Link onClick={logout} >Logout</Link>
        </nav>
    </div>
  )
}

export default Nav
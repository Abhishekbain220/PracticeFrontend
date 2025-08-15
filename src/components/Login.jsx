import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios.jsx';
import React, { useContext } from 'react'
import { UserContext } from '../utils/UserContext.jsx';

const Login = () => {
  let navigate=useNavigate()
    let { username, setUsername, email, setEmail, password, setPassword,token,setToken } = useContext(UserContext)
    let submitHandler=async(e)=>{
        try {
            e.preventDefault()
            let user={username,email,password}
            let createUser=await axios.post("/user/login",user)
            localStorage.setItem("authToken",JSON.stringify(createUser.data.token))
            setToken(createUser.data.token)
            setEmail("")
            setPassword("")
            navigate("/")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
            
            <input type="email" value={email} name="email" onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' id="" />

            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder='Enter Password' id="" />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login
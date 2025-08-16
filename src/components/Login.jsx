import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios.jsx';
import React, { useContext, useState } from 'react'
import { UserContext } from '../utils/UserContext.jsx';
import Loading from './Loading.jsx';

const Login = () => {
  let navigate = useNavigate()
  let { username, setUsername, email, setEmail, password, setPassword, token, setToken } = useContext(UserContext)
const [LoadingSwitch, setLoadingSwitch] = useState(false)
  let submitHandler = async (e) => {
    try {
      e.preventDefault()
      setLoadingSwitch(true)
      let user = { username, email, password }
      let createUser = await axios.post("/user/login", user)
      localStorage.setItem("authToken", JSON.stringify(createUser.data.token))
      setToken(createUser.data.token)
      setEmail("")
      setPassword("")
      navigate("/")
      setLoadingSwitch(false)
    } catch (error) {
      console.log(error.response.data.message)
      setLoadingSwitch(false)
    }
  }

  return LoadingSwitch == false  ?(
    <div>
      <form action="" onSubmit={submitHandler}>

        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' id="" />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Enter Password' id="" />
        <button>Login</button>
      </form>
    </div>
  ):(<Loading/>)
}

export default Login
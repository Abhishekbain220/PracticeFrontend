import axios from "./axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export let UserContext = createContext()
export let UserProvider=(props)=>{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)
    useEffect(() => {
      let storeToken=JSON.parse(localStorage.getItem("authToken"))
      setToken(storeToken)
    }, [])

    
    
    return (
        <UserContext.Provider value={{username, setUsername, email, setEmail, password, setPassword , token, setToken}}>
            {props.children}
        </UserContext.Provider>
    )
}
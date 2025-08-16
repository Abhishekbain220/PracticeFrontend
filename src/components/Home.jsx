import axios from '../utils/axios.jsx';
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/ProductContext.jsx';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/UserContext.jsx';
import Loading from './Loading.jsx';

const Home = () => {
    let { products, setProducts, getProducts, deleteProduct,title,rate,setRate,setTitle,setRateupdateSwitch, setUpdateSwitch, createSwitch, setCreateSwitch ,productId, setProductId } = useContext(ProductContext)
    let { username, setUsername, email, setEmail, password, setPassword,token,setToken } = useContext(UserContext)
    let navigate=useNavigate()

    let updateProduct = async (id) => {
        try {
            let { data } = await axios.get(`/product/singalProduct/${id}`)
            console.log(data)
            setTitle(data.product.title)
            setRate(data.product.rate)
            setUpdateSwitch(true)
            setCreateSwitch(false)
            setProductId(id)
            navigate("/createProduct")
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getProducts()
        
    }, [token])

    return products ?(
        <div>
            <h1>Home</h1>
            {products && products.map((p, i) => (
                <div key={i}>
                    <h1>{p.title}</h1>
                    <h1>{p.rate}</h1>
                    {token && <button onClick={() => deleteProduct(p._id)}>Delete</button>}
                    {token && <button onClick={() => updateProduct(p._id)}>Update</button>}
                </div>
            ))}
        
        </div>
    ):(<Loading/>)
}

export default Home
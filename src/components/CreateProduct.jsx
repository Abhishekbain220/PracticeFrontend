import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../utils/axios.jsx';
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/ProductContext.jsx';

const CreateProduct = () => {
    let { products, setProducts, getProducts, deleteProduct, title, rate, setTitle, setRate, updateSwitch, setUpdateSwitch, createSwitch, setCreateSwitch,productId, setProductId } = useContext(ProductContext)
    let navigate = useNavigate()




    let submitHandler = async (e) => {
        try {
            e.preventDefault()
            let product = { title, rate }
            let createProduct = axios.post("/product/createProduct", product)
            setTitle("")
            setRate("")
            navigate("/")
            await getProducts()
        } catch (error) {
            console.log(error.response.data.message)
        }



    }

    let updateHandler=async(e)=>{
        try {
            e.preventDefault()
            let product = { title, rate }
            let updateProduct=await axios.put(`/product/updateProduct/${productId}`,product)
            setTitle("")
            setRate("")
            setProductId("")
            setUpdateSwitch(false)
            
            navigate("/")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div>
            {createSwitch && (
                <>
                    <h1>Create Products</h1>
                    <form onSubmit={submitHandler}>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Product Title' name="title" id="" />
                        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder='Enter Product Rate' name="rate" id="" />
                        <button>Create</button>
                    </form>
                </>
            )}
            {updateSwitch && (
                <>
                    <h1>Update Products</h1>
                    <form onSubmit={updateHandler}>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Product Title' name="title" id="" />
                        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder='Enter Product Rate' name="rate" id="" />
                        <button>Update</button>
                    </form>
                </>
            )}
        </div>
    )
}

export default CreateProduct
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios.jsx';
import { createContext, useState } from "react";

export let ProductContext = createContext()
export let ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState("")
    const [createSwitch, setCreateSwitch] = useState(false)
    const [updateSwitch, setUpdateSwitch] = useState(false)
    const [productId, setProductId] = useState("")

    let getProducts = async () => {
        let { data } = await axios.get("/product/viewProduct")
        setProducts(data.products)
    }

    let deleteProduct = async (id) => {
        try {
            let deleteProduct = await axios.delete(`/product/deleteProduct/${id}`)
            await getProducts()
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    
    return (
        <ProductContext.Provider value={{ products, setProducts, getProducts, deleteProduct,title,rate,setTitle,setRate,updateSwitch, setUpdateSwitch, createSwitch, setCreateSwitch,productId, setProductId }}>
            {props.children}
        </ProductContext.Provider>
    )
}
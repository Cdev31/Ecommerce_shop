import { useDispatch, useSelector } from "react-redux"

import { AddProduct } from '../../Store/Products/thunks'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateProductForm = ()=>{

    const [ product, setProduct ] = useState({})

    const navigate = useNavigate()

    const dispatch = useDispatch()
   
    const onSubmit = (event)=>{
        event.preventDefault()
    }

    const onInputChange = ({ target })=>{
        setProduct(
            {
                ...product,
                [target.name]: target.value
            }
        )
    } 

    const onCreate= ()=>{
        dispatch( AddProduct( product ) )
        navigate({
            pathname:"/product/products"
        })
    }

    return (
        <>
        <form
        className="flex flex-col w-64 "
        onSubmit={onSubmit}
        >
            <label className="font-bold">Title: </label>
            <input
            name="title"
            onBlur={onInputChange}
            className="border-b-2 border-black"
            type="text" placeholder="title" />

            <label className="font-bold">Description: </label>
            <input
            name="description"
            onBlur={onInputChange}
            className="border-b-2 border-black"
            type="text" placeholder="description" />

            <label className="font-bold">Stock: </label>
            <input
            name="stock"
            onBlur={onInputChange}
            className="border-b-2 border-black"
            type="text" placeholder="stock" />

            <label className="font-bold">Price: </label>
            <input
            name="price"
            onBlur={onInputChange}
            className="border-b-2 border-black"
            type="text" placeholder="price" />
        </form>

        <button 
        onClick={onCreate}
        className="bg-blue-500 text-white rounded-sm">
            Add
        </button>
        </>
    )
}
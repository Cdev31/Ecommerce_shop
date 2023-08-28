import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../../Store/Products"
import { HeaderInfoProductCard } from "../Components/HeaderInfoProductCard"


export const ProductInfoPage = ()=>{
    
    const dispatch = useDispatch()
    const { products } = useSelector( state => state.product )
    const { id } = useParams()

    useEffect(()=>{
        dispatch( getProductById({ id }) )
     },[ ])    

    return (
        <main className="flex" >
            <HeaderInfoProductCard/>
            
        </main>
    )
}
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readProducts } from "../../Store/Products/thunks"
import { ProductCard } from "./ProductCard"
import { PaginationButton } from "../Components/PaginationButton"


export const ProductList = ()=>{

    const dispatch = useDispatch()
    const { products } = useSelector( state => state.product )

    useEffect(()=>{
        dispatch( readProducts() )
    }, [ ])

    return (
        <div 
        className="flex flex-col w-full "
        >
        {
            products.map( product => {
                return (
                    <ProductCard
                     key={product.id}
                     data={product}
                    />
                )
            })
        }
        <PaginationButton/>
        </div>
    )
}
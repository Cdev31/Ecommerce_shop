import { Route, Routes } from "react-router-dom"
import { ProductPage } from "../Pages/ProductPage"
import { CreateProductPage } from "../Pages/CreateProductPage"



export const ProductRouter = ()=>{
    return (
        <Routes>
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/add_product" element={<CreateProductPage/>} />
        </Routes>
    )
}
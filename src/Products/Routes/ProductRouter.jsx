import { Route, Routes } from "react-router-dom"
import { ProductPage } from "../Pages/ProductPage"
import { CreateProductPage } from "../Pages/CreateProductPage"
import { ProductInfoPage } from "../Pages/ProductInfoPage"



export const ProductRouter = ()=>{
    return (
        <Routes>
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/add_product" element={<CreateProductPage/>} />
            <Route path="products/:id" element={<ProductInfoPage/>} />
        </Routes>
    )
}
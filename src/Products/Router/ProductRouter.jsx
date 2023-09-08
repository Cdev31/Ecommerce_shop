import { Route, Routes } from "react-router-dom"
import { ProductDetailsPage, ProductPage } from "../Pages"




export const ProductRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPage/>}  />
            <Route path="/details/:id" element={<ProductDetailsPage/>} />
        </Routes>
    )
}
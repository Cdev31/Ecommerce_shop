import { Route, Routes } from "react-router-dom"
import { CreateProductPage, ProductDetailsPage, ProductPage } from "../Pages"
import { Layout } from "../../Common/Layout/Layout"



export const ProductRouter = () => {
    return (
        <Layout>
            <Routes>
               <Route path="/" element={<ProductPage/>}  />
               <Route path="/details/:id" element={<ProductDetailsPage/>} />
               <Route path="/create_product" element={<CreateProductPage/>}/>
            </Routes>
        </Layout>
    )
}
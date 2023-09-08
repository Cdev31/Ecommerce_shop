import { Route, Routes } from "react-router-dom"
import { ProductRouter } from "../Products/Router/ProductRouter"
import { CommonRouter } from "../Common/Router/CommonRouter"


export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/*" element={<CommonRouter/>}/>
            <Route path="/products/*" element={<ProductRouter/>} />
        </Routes>
    )
}
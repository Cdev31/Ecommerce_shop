import { Route, Routes } from "react-router-dom"
import { ProductRouter } from "../Products/Router/ProductRouter"
import { CommonRouter } from "../Common/Router/CommonRouter"
import { UserRouter } from "../User/Router/UserRouter"


export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/*" element={<CommonRouter/>}/>
            <Route path="/products/*" element={<ProductRouter/>} />
            <Route path="/User/*" element={<UserRouter/>}/>
        </Routes>
    )
}
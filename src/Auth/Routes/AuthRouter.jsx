import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage"



export const AuthRouter = ()=>{
    return(
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { SigInPage } from "../Pages/SingIn"

export const CommonRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/SigIn" element={<SigInPage/>} />
        </Routes>
    )
}
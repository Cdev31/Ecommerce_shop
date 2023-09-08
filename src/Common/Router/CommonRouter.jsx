import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomPage"

export const CommonRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom"
import { UserProfilePage } from "../Pages/UserProfilePage"



export const UserRouter = ()=>{
    return (
        <Routes>
            <Route path="/profile/:id" element={<UserProfilePage/>}/>
        </Routes>
    )
}
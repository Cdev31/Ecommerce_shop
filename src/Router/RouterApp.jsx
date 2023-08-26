import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Common/Pages/HomePage";
import { AuthRouter } from '../Auth'
import { NotFoundPage } from "../Common/Pages/NotFoundPage";
import { ProductRouter } from "../Products/Routes/ProductRouter";


export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>

            <Route path="/auth/*" element={<AuthRouter/>} />

            <Route path="/product/*" element={<ProductRouter/>}  />

            <Route path="/*" element={<NotFoundPage/>}/>

        </Routes>
    );
}

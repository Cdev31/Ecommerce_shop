import { Link, NavLink} from "react-router-dom"
import { Searcher } from "./Searcher"

export const NavBar = ()=>{
    return(
       <nav className="flex flex-col">
         <ul 
        className="bg-black/[.9] flex gap-1 flex-row pl-1 pb-1 border-b-1 border-black/70 pt-1"
        >
            <li className="basis-1/2">
                <NavLink
                className="text-white font-bold text-xl"
                to="/">
                Home
                </NavLink>
            </li>
            <li
            className="basis-[6rem]"
            >
                <NavLink
                className="text-white font-bold text-xl"
                to="/product/products">
                Products
                </NavLink>
            </li>

            <li
            className="basis-[5rem]"
            >
                <NavLink
                className="text-white font-bold text-xl"
                to="/">
                Ayuda
                </NavLink>
            </li>

            <li 
            className="basis-1/6"
            >
                <NavLink
                className="text-white font-bold text-xl"
                to="/">
                Terminos
                </NavLink>
            </li>

            <div
            className="flex gap-3 basis-1"
            >
                <li>
                    <NavLink
                    className="text-white font-bold text-xl"
                    to="/auth/login">
                    Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className="text-white font-bold text-xl"
                    to="/auth/register">
                    Register
                    </NavLink>
                </li>
            </div>
        </ul>
        <div
        className="bg-black/[.85] p-1"
        >
            <Searcher/>
        </div>
       </nav>
    )
}
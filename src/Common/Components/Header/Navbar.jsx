import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { Searcher } from "./Searcher"
import {ReactComponent as Logo } from '../../../icons/logo.svg'
import { useSelector } from "react-redux"

export const Navbar = ()=>{
    const { status, email , photoURL, uuid } = useSelector( state => state.auth)
    

    return (
        <>
        <ul className="flex flex-row gap-2 h-14  bg-theme  text-white font-bold">
            <li className="basis-1/12 mb-8">
                <NavLink to="/">
                  <Logo className="relative bottom-7 z-[1] cursor-pointer" fill="white"/>
                </NavLink>
            </li>
            <div className="flex cursor-pointer mt-1">
                <MapPinIcon className="w-8 h-8 pt-2"/>
                <span className="ml-1 mr-1 mt-1">
                <p className="text-sm">Enviar a </p>
                <p className="text-sm">El Salvador</p>
                </span>
            </div>
            <div className="basis-1/2 mt-1">
                <Searcher/>
            </div>

            <div className="flex flex-row gap-2 basis-1/4">
                {
                    status === 'authenticated' ?
                    <div className="flex flex-row gap-1 self-center bg-white m-1 p-1 h-10 rounded-3xl">
                        <img src={photoURL} className="h-7 self-center rounded-full "/>
                        <NavLink 
                        to={`/User/profile/${uuid}`}
                        className="font-bold text-theme self-center text-base" >
                            {email}
                        </NavLink>
                    </div> :<>
                    <li className="flex text-xl m-2">
                    <NavLink className="border-white border-2 pl-2 pr-2 pt-1" to='/Login'>
                        LogIn
                    </NavLink>
                    </li>

                    <li className="flex text-xl m-2 ">
                        <NavLink className="border-white border-2 pl-2 pr-2 pt-1" to='/SigIn'>
                            SigIn
                        </NavLink>
                    </li>
                    </>
                }
            </div>
            <li className="flex mr-3 cursor-pointer basis-1 mt-1">
                <ShoppingBagIcon className="w-10 h-10 "/>
                <p>0</p>
            </li>
        </ul>
        <ul className="flex flex-row gap-3 text-sm  bg-theme/80 text-white font-bold pt-1 pl-1">
            <li className="h-full z-[2]">
                <NavLink to='/products/'>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                Terms and Conditions
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    Costumer Services
                </NavLink>
            </li>
            <li className="pr-5">
                <NavLink to='/'>
                    Sell
                </NavLink>
            </li>
        </ul>
        </>
    )
}
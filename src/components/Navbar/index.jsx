import {NavLink} from 'react-router-dom'
import {ShoppingBagIcon,HomeIcon,Bars3Icon} from '@heroicons/react/24/solid'
import {SechProduct} from '../../components/SerchProdut'
import { useContext } from 'react'
import { contextProduct } from '../../context'

export const Navbar = ({open})=>{
    const context = useContext(contextProduct)
    return (
        <nav className='w-full h-10 bg-white col-start-1 col-end-6 fixed z-20 '>
          <ul className='flex flex-col bg-white gap-2 border-b border-black/50 text-black'>
           
            <div className='flex flex-row gap-2 pr-2 justify-between'> 
                    <li className='flex'> 
                        <NavLink to='/'>
                            <HomeIcon className='h-9 w-10 pt-1 pl-1 text-black/90'/>
                        </NavLink>
                    </li>
                    <li className='w-[400px]'>
                       <SechProduct/>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <ShoppingBagIcon className='w-8 h-9 pt-1 text-black'/>
                        </NavLink>
                    </li>
                </div>

                <ul className='flex'>
                   <span onClick={()=>open()} className='flex items-center cursor-pointer border border-black/50 mb-1 ml-1 mr-1'>
                       <Bars3Icon className='h-8 w-8 mb-1 pt-1 ml-1 cursor-pointer'/>
                       <p className='font-medium text-lg mb-1 pt-1 pr-2 '>Todo</p>
                   </span>
                   <div className='flex gap-3 items-center font-medium cursor-pointer'>
                        <li>
                            Ayuda
                        </li>
                        <li>
                            Servicio al cliente
                        </li>
                        <li>
                            Ofertas
                        </li>
                        <li>
                            My Orders
                        </li>
                   </div>
                    <div className='flex gap-3 mr-2 ml-auto'>
                        <li className='mt-[0.5rem] font-medium'>
                            <NavLink to='/'>
                                MyAccount
                            </NavLink>
                        </li>
                        <li 
                        onClick={()=>context.openLog()}
                        className='mt-[2px] h-8 rounded-lg w-28 font-medium text-xl bg-black text-white text-center hover:scale-[1.02]'>
                            <NavLink to='/'>
                                Login
                            </NavLink>
                        </li>
                        <li className='mt-[2px] h-8  rounded-lg w-28 font-medium text-xl bg-black text-white text-center hover:scale-[1.02]'>
                            <NavLink to='/'>
                                Sigin
                            </NavLink>
                        </li>  
                    </div>                 
                </ul>
            </ul>  
        </nav>
    )
}
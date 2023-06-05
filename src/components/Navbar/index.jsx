import {NavLink} from 'react-router-dom'
import {ShoppingBagIcon,HomeIcon,ArrowDownIcon} from '@heroicons/react/24/solid'

export const Navbar = ({open})=>{
    return (
        <nav className='w-full h-10 bg-white col-start-1 col-end-6 fixed z-20 border-b border-black/50'>
            <ul className='flex flex-row gap-2 justify-between  text-black'>
                <li className='flex'> 
                    <ArrowDownIcon
                    onClick={()=>open()}
                    className='h-5 w-5 mt-3 ml-1 cursor-pointer'/>
                    <NavLink to='/'>
                        <HomeIcon className='h-9 w-10 pt-1 pl-1 text-black/90'/>
                    </NavLink>
                </li>
                <div className='flex gap-2 pr-2'>
                <li className='mt-[3px] mr-1 font-medium text-xl '>
                    <NavLink to='/'>
                        MyOrders
                    </NavLink>
                </li>
                <div className='flex gap-3 mr-5'>
                <li className='mt-[3px] mb-[1px] rounded-lg w-28 font-medium text-xl bg-black text-white text-center hover:scale-[1.02]'>
                    <NavLink to='/'>
                        Login
                    </NavLink>
                </li>
                <li className='mt-[3px] mb-[1px] rounded-lg w-28 font-medium text-xl bg-black text-white text-center hover:scale-[1.02]'>
                    <NavLink to='/'>
                        Sigin
                    </NavLink>
                </li>
                </div>
                <li>
                    <NavLink to='/'>
                        <ShoppingBagIcon className='w-8 h-9 pt-1 text-black'/>
                    </NavLink>
                </li>
                </div>
            </ul>
            
        </nav>
    )
}
import {NavLink} from 'react-router-dom'
import {ArrowSmallLeftIcon,XCircleIcon} from '@heroicons/react/24/solid'
import {useContext, useState} from 'react'

import {contextProduct} from '../../context/'

export const VerticalNavbar = ()=>{
    const [openCategory,setOpenCategory] = useState(false)

    const context = useContext(contextProduct)
    const activeStyle = 'bg-black rounded-lg p-1 text-white'
    
    return (
            <nav className='fixed bg-white row-start-2 border-r h-full border-black w-60 col-start-1 col-end-2 top-0 z-20 '>
            <XCircleIcon onClick={()=>context.close()} className='h-7 w-8 absolute right-0 z-20 text-white cursor-pointer'/>
            <div className='relative w-full h-8 bg-black'></div>
            <div onClick={()=>{setOpenCategory(true)}}>Categories</div>
               {
                openCategory && (     
                    <ul className='flex flex-col gap-5 ml-4 pt-2'>
                        <ArrowSmallLeftIcon onClick={()=>setOpenCategory(false)} className=' h-6 font-bold cursor-pointer mr-auto'/>
                    <li className='font-bold text-lg cursor-pointer'>
                        <NavLink
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/clothes'>
                            Clothes
                        </NavLink>
                    </li>
                    <li className='font-bold text-lg cursor-pointer'>
                        <NavLink
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/Electronic'>
                            Electronic
                        </NavLink>
                    </li>
                    <li className='font-bold text-lg cursor-pointer'>
                        <NavLink 
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/shoes'>
                            Shoes
                        </NavLink>
                    </li>
                    <li className='font-bold text-lg cursor-pointer'>
                        <NavLink 
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/cleaning'>
                            Cleaning
                        </NavLink>
                    </li>
                </ul>
                )
               }
       </nav>    
    )
}
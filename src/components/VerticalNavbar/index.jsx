import {NavLink} from 'react-router-dom'
import {ArrowSmallLeftIcon,XCircleIcon} from '@heroicons/react/24/solid'
import {useContext, useState} from 'react'

import {contextProduct} from '../../context/'

export const VerticalNavbar = ()=>{
    const context = useContext(contextProduct)
    const activeStyle = 'bg-black rounded-lg p-1 text-white'
    
    return (
            <nav className='fixed bg-white row-start-2 border-r h-full border-black w-60 col-start-1 col-end-2 top-0 z-20 '>
            <XCircleIcon onClick={()=>context.close()} className='h-8 w-8 pt-1 absolute right-0 z-20 text-white cursor-pointer'/>
            <div className='relative w-full h-10 bg-black/90'></div>
            <li className='text-xl font-bold pl-2 pt-1 cursor-pointer hover:text-blue-950' onClick={()=>{setOpenCategory(true)}}>Categories</li>   
                <ul className='flex flex-col gap-5 ml-12 pt-2 list-disc'>
                    <li className='font-bold text-lg cursor-pointer hover:text-blue-950'>
                        <NavLink
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/clothes'>
                            Clothes
                        </NavLink>
                    </li>
                    <li className='font-bold text-lg cursor-pointer hover:text-blue-950'>
                        <NavLink
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/Electronic'>
                            Electronic
                        </NavLink>
                    </li>
                    <li className='font-bold text-lg cursor-pointer hover:text-blue-950'>
                        <NavLink 
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/shoes'>
                            Shoes
                        </NavLink>
                    </li>
                    <li className='font-bold text-lg cursor-pointer hover:text-blue-950'>
                        <NavLink 
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        to='/cleaning'>
                            Cleaning
                        </NavLink>
                    </li>
                </ul>
       </nav>    
    )
}
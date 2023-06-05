import {NavLink} from 'react-router-dom'
import {ArrowSmallLeftIcon} from '@heroicons/react/24/solid'

export const VerticalNavbar = ({openNav,close})=>{
    const activeStyle = 'bg-black rounded-lg p-1 text-white'
    
    return (
       <>
       {
        openNav && (
            <nav className='bg-white row-start-2 mt-5 border-r h-full border-black w-44 col-start-1 col-end-2 top-5 fixed z-20 pt-2 '>
               <ArrowSmallLeftIcon 
               onClick={()=>close()}
               className=' h-6 font-bold cursor-pointer ml-1'/>
               <ul className='flex flex-col gap-5 ml-8 pt-2'>
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
           <div className='relative top-[21rem] w-full h-8 bg-black'></div>
       </nav>
        )
       }
       </>
    )
}
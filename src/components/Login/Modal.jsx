import { createPortal } from "react-dom"
import {XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { contextProduct } from '../../context'


export const LoginModal = ({children})=>{
    const context = useContext(contextProduct)

    return createPortal(
        <div className="w-full h-full bg-black/70 top-0 fixed z-30 flex flex-col items-center pt-10">
            <XMarkIcon 
            onClick={()=> context.closeLog()}
            className='w-8 h-8 text-white ml-[26rem] cursor-pointer hover:text-red-400'/>
        {children}
        </div>,
        document.getElementById('login-modal')
    )
}
import {XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { contextProduct } from '../../context'

export const LoginForm = ()=>{
    const context = useContext(contextProduct)

    return (
        <form className="w-[400px] h-[400px] bg-orange-700">
            <XMarkIcon 
            onClick={()=> context.closeLog()}
            className='w-6 h-6 text-red-800'/>
            <label>Username</label>
            <input type="text"/>
            <label>Username</label>
            <input type="password"/>
        </form>
    )
}
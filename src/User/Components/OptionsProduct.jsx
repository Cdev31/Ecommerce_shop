import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'


export const OptionsProduct = ()=>{
    const navigate = useNavigate()

    const onChangeUrl = ()=>{
        navigate({
            pathname: '/products/create_product'
        })
    }

    return(
        <section className="flex flex-col gap-5 basis-1/4 justify-center">
            <p 
            onClick={onChangeUrl}
            className="flex gap-1 rounded-xl p-1 cursor-pointer border-2 border-theme text-theme">
                <ShoppingBagIcon className='h-6'/>
                <span>Productos</span>
                <EllipsisHorizontalIcon className='h-6'/>
            </p>
            <p className="flex gap-1 rounded-xl p-1 cursor-pointer border-2 border-theme text-theme">
                <ShoppingBagIcon className='h-6'/>
                <span>Productos</span>
                <EllipsisHorizontalIcon className='h-6'/>
            </p>
            <p className="flex gap-1 rounded-xl p-1 cursor-pointer border-2 border-theme text-theme">
                <ShoppingBagIcon className='h-6'/>
                <span>Productos</span>
                <EllipsisHorizontalIcon className='h-6'/>
            </p>
            <p className="flex gap-1 rounded-xl p-1 cursor-pointer border-2 border-theme text-theme">
                <ShoppingBagIcon className='h-6'/>
                <span>Chnage password</span>
                <EllipsisHorizontalIcon className='h-6'/>
            </p>
            <p className="flex gap-1 rounded-xl p-1 cursor-pointer border-2 border-theme text-theme">
                <ShoppingBagIcon className='h-6'/>
                <span>Productos</span>
                <EllipsisHorizontalIcon className='h-6'/>
            </p>
        </section>
    )
}
import { ArrowUpRightIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const OrderDetailInfo =()=>{
    return (
        <section className="flex flex-col gap-2 basis-1/4 border-2 border-black m-2 p-1 rounded-md">
            <span className="text-sm font-medium">EL precio total del producto por unidad es de $499.99 + IVA.EL lugar de envio dependera y fecha de este mismo dependera del vendedor</span>       
           <p className='flex'>
            <MapPinIcon className='h-5 text-theme'/>
            <span className='font-semibold text-sm text-theme'>Envio a el Salvador</span>
           </p>
           <p className='flex flex-row gap-2'>
            <span className='font-bold text-lg'>En Stock</span> 
            <span className='rounded-md font-bold text-lg pl-1 pr-1 border-black/50 border-2'>23</span>
           </p>    
            <select className=' bg-transparent border-2 border-theme/80 text-theme cursor-pointer w-32 rounded-md focus:outline-none'>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
            </select>
            <div className='flex flex-col gap-1'>
                <button className='bg-theme border-l-2 border-b-2 border-white/50 
                rounded-md text-white font-bold text-sm h-7 hover:scale-[1.02]'>Agregar al carrito</button>
                <button className='bg-theme border-l-2 border-b-2 border-white/50 
                rounded-md text-white font-bold text-sm h-7 hover:scale-[1.02]'>Comprar ahora </button>
            </div>
            <p className='font-bold text-sm'>La garantia de este producto abarca desde los primeros 6 meses de compra bajo
             ciertas restricciones.
              <a href='' className='text-blue-500 underline hover:text-yellow-500/50' >ver garantia</a>
            </p>
            <p className='flex gap-1 pt-3 justify-center'>
                <span className='font-bold text-sm text-theme underline cursor-pointer hover:text-yellow-500/50'>Ver detalles y condiciones de compra</span>
                <ArrowUpRightIcon className='h-5 text-theme'/>
            </p>
        </section>
    )
}
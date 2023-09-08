import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'


export const PaginationButton = ()=>{
    return (
       <section className='flex flex-col justify-center'>
         <div className='flex gap-2 cursor-pointer'>
            <ChevronLeftIcon className='h-6 self-center'/>
            <span className='flex gap-1 flex-row'>
                <p className='font-bold text-lg'>1</p>
                <EllipsisHorizontalIcon className='h-6 pt-2 w-8'/>
                <p className='font-bold text-lg'>5</p>
                <EllipsisHorizontalIcon className='h-6 pt-2 w-8'/>
                <p className='font-bold text-lg'>10</p>
            </span>
            <ChevronRightIcon className='h-6 self-center'/>
        </div>
        <p className='font-bold text-sm pl-8'> 5 de 120 resultados</p>
       </section>
    )
}
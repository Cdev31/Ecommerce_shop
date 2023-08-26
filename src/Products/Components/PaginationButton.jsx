import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

export const PaginationButton = ()=>{

    const numberPaginationStyle = 'w-8 h-8  text-center mt-1 pt-[2px] font-bold text-xl'
    const nextIconStyle = 'w-7 h-7 cursor-pointer mt-[6px]'
    
    return (
        <div className='flex flex-col h-[7rem] '>
            <div 
            className="flex gap-1 flex-row justify-center pr-[65px] mt-6"
            >
                <ChevronDoubleLeftIcon
                className={nextIconStyle}
                />
                <span
                className={numberPaginationStyle}
                > 1 </span>
                <EllipsisHorizontalIcon
                className='w-6 h-6 mt-2'
                />
                <span
                className={numberPaginationStyle}
                > 5 </span>
                <EllipsisHorizontalIcon
                className='w-6 h-6 mt-2'
                />
                <span
                className={numberPaginationStyle}
                > 10 </span>
                <ChevronDoubleRightIcon
                className={nextIconStyle}
                />
            </div>
            <p className='text-sm font-bold text-center mr-10 '> 1-10 de 520 resultados </p>
        </div>
    )
}
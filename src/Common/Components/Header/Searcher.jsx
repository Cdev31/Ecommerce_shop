import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

export const Searcher = ()=>{
    return (
        <div className='flex flex-row mt-1'>
            <input type="text" placeholder="hola" className="focus:outline-none w-full text-black font-bold pl-2"/>
            <MagnifyingGlassCircleIcon className='w-12 h-10 relative right-5 bg-white
             text-theme border-l-2 border-theme rounded-r-xl cursor-pointer'/>
        </div>
    )
}
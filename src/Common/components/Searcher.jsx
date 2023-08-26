import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const Searcher = ()=>{
    return (
        <div 
        className="flex ml-52"
        >
            <input 
            style={{
                textTransform: 'lowercase'
            }}
            className="rounded-lg w-[400px] h-8 pl-1 focus:outline-none font-semibold"
            type="text" placeholder="Search"/>
            <MagnifyingGlassIcon
             className='w-6 relative right-8 text-gray-500 cursor-pointer '
            />
        </div>
    )
}
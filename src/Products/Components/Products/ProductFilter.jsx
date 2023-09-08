import { StarIcon } from '@heroicons/react/24/solid'


export const ProductFilter = ()=>{
    const priceLabelStyle = "relative left-[14px] top-[6px] text-sm";
    const inputPriceStyle = "w-12 focus:outline-blue-600/50 pl-3 text-sm font-medium";
    return (
        <div className="flex flex-col w-64 gap-3 mt-5">
            <article className="flex flex-col gap-1">
                <h3 className="font-bold pl-3">Price</h3>
                <p className="flex flex-col pl-3">
                    <span className="font-medium text-sm"> 100$ - 150$</span>
                    <span className="font-medium text-sm"> 150$ - 200$</span>
                    <span className="font-medium text-sm"> 200$ - more</span>
                </p>
                <div className="flex gap-1">
                    <label className={priceLabelStyle}>$</label>
                    <input 
                    className={inputPriceStyle}
                    type="text" placeholder="min" />
                    <label className={priceLabelStyle}>$</label>
                    <input
                    className={inputPriceStyle}
                    type="text" placeholder="max" />
                    <button className="text-sm font-bold border-2 rounded-md p-1 hover:scale-[1.02]">Search</button>
                </div>
            </article>
            <article className="flex flex-col gap-1">
              <h3 className="font-bold pl-3">Brands</h3>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Hp</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Dell</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Yamaha</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Lenovo</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Windows</label>  
              </div>
            </article>
            <article className='flex flex-col gap-1 '>
              <h3 className="font-bold pl-3">Starts</h3>
              <div className='flex pl-3'>
              <StarIcon className='h-6 text-yellow-500'/>
              <StarIcon className='h-6 text-yellow-500'/>
              <StarIcon className='h-6 text-yellow-500'/>
              <StarIcon className='h-6 text-yellow-500'/>
              <StarIcon className='h-6 text-yellow-500'/>
              </div>
              <div className='pl-3'>
                <input type="range" className=" cursor-pointer appearance-none accent-black border-2 border-black rounded-lg"
                />
              </div>
            </article>
            <article>
            <h3 className="font-bold pl-3">Patterns</h3>
            <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Colors</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Laptops</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Cores</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Processors</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Operative system</label>  
              </div>
              <div className="flex flex-row gap-2 pl-3">
              <input type="checkbox" className="cursor-pointer"  />
              <label className="font-medium text-sm">Capacity</label>  
              </div>
            </article>
        </div>
    )
}
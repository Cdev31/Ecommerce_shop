import { StarIcon } from '@heroicons/react/24/outline'

const images = [
    'dell_1.jpg',
    'dell_2.jpg'
]

export const OfertProductCard = ()=>{
    return(
        <section className="flex gap-1 self-center cursor-pointer ">
            {
                images.map((image,i)=>{
                    const imageName = `/public/assets/${image}`
                    return (
                        <figure className="flex hover:scale-[1.02]">
                            <img src={imageName} className="w-32" />
                            <caption className="flex flex-col max-w-sm border-2 border-black/50 rounded-md p-2">
                                <h3 className="text-sm font-bold">Latitud 23 pc core i7 4gb ram</h3>
                                <div className='flex'>
                                  <StarIcon className='h-5 text-yellow-500'/>
                                  <StarIcon className='h-5 text-yellow-500'/>
                                  <StarIcon className='h-5 text-yellow-500'/>
                                  <StarIcon className='h-5 text-yellow-500'/>
                                  <span className='text-sm font-bold'>+4</span>
                                </div>
                               <div className='flex gap-6 self-center'>
                                <p className="flex pt-4">
                                    <span className="font-bold text-lg line-through text-red-600/80">$596</span>
                                    <span className="font-bold text-sm line-through text-red-600/80">99</span>
                                    </p>
                                <div className="flex flex-col">
                                    <p className='text-sm font-bold text-theme'>Discount</p>
                                    <p className='flex'>
                                      <span className="font-bold text-lg ">$500</span>
                                      <span className="font-bold text-sm">99</span>
                                    </p>
                                </div>
                               </div>
                            </caption>
                        </figure>
                    )       
                })
            }
        </section>
    )
}
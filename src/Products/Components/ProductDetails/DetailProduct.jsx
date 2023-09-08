import { StarIcon } from '@heroicons/react/24/outline'


export const DetailProduct = ()=>{
    return (
        <section className="flex ml-4">
           <article className='flex flex-col gap-1 '>
           <h3 className='text-xl max-w-[500px] '>ASUS Prime B550-PLUS AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard (PCIe 4.0, ECC Memory, 1Gb LAN, HDMI 2.1, DisPlayPort 1.2 (4K@60HZ), Addressable Gen 2 RGB Header and Aura Sync)</h3>                     
           <div className='flex'>
            <StarIcon className='h-6 text-yellow-500'/>
            <StarIcon className='h-6 text-yellow-500'/>
            <StarIcon className='h-6 text-yellow-500'/>
            <StarIcon className='h-6 text-yellow-500'/>
           <span className='font-bold text-sm'>+4</span>
           </div>
           <article className='flex gap-2'>
            <div className='p-2 border-2 border-theme rounded-md flex flex-col'>
                <h3 className='text-sm font-medium'>Normal price</h3>
                <p className='flex'>
                    <span className='text-xl font-bold'>US$ 499</span>
                    <span className='font-bold text-sm'>99</span>           
                </p>
            </div>
            <div className='p-2 border-2 border-theme rounded-md flex flex-col'>
                <h3 className='text-sm font-medium text-blue-600'>15% discount </h3>
                <p className='flex'>
                    <span className='text-xl font-bold'>US$ 425</span>
                    <span className='font-bold text-sm'>15</span>           
                </p>
            </div>
           </article>
           <p>
            <span className='text-sm font-medium'>RAM:</span>
            <span className='font-bold text-sm'> 8GB DDR4</span>
           </p>
           <p>
            <span className='text-sm font-medium'>Processor:</span>
            <span className='font-bold text-sm'> Core i7</span>
           </p>
           <p>
            <span className='text-sm font-medium'>Screen:</span>
            <span className='font-bold text-sm'> Latituted touch mx1</span>
           </p>
           <p>
            <span className='text-sm font-medium'>Batery:</span>
            <span className='font-bold text-sm'>Litio</span>
           </p>
           </article>
        </section>
    )
}
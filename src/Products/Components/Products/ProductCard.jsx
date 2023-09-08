import { MapPinIcon, StarIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const images = [
    'dell_1.jpg',
    'dell_2.jpg',
    'dell_3.png',
    'pc_3.jpg',
    'dell_1.jpg',
    'dell_2.jpg',
    'dell_3.png',
    'pc_3.jpg'
]


export const ProductCard = ()=>{
    const navigate = useNavigate()

    const onChangeDetails = ()=>{
        navigate({
            pathname: '/products/details/' + 1
        })
    }

    return (
        <section>
            <div 
            onClick={onChangeDetails}
            className="flex gap-5 pl-2 cursor-pointer">
                <figure className="flex flex-col gap-2 justify-center">
                    {
                        images.map((image,i)=>{
                            const imageName = `/public/assets/${image}`
                            return (
                                <div 
                               
                                key={i}
                                className="flex">
                                    <img 
                                    src={imageName} alt={image} 
                                    className="w-52 h-52"
                                    />
                                    <article className="ml-2 flex flex-col gap-2">
                                        <h2 className='text-xl'>ASUS Prime B550-PLUS AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard (PCIe 4.0, ECC Memory, 1Gb LAN, HDMI 2.1, DisPlayPort 1.2 (4K@60HZ), Addressable Gen 2 RGB Header and Aura Sync)</h2>
                                        <div className='flex flex-col gap-1'>
                                            
                                            <div className='flex'>
                                            <StarIcon className='h-6 text-yellow-500'/>
                                            <StarIcon className='h-6 text-yellow-500'/>
                                            <StarIcon className='h-6 text-yellow-500'/>
                                            <StarIcon className='h-6 text-yellow-500'/>
                                            <span className='text-sm font-bold'>+4</span>
                                            </div>
                                            <p className='flex'>
                                                <span className='text-2xl font-medium'>$499</span>
                                                <span className='text-sm'>99</span>
                                            </p>
                                            <p className='flex flex-row'>
                                                <MapPinIcon className='h-4 self-center'/>
                                                <span className='text-sm font-medium'>Envio a el salvador</span>
                                            </p>
                                            <p>
                                                <span className='text-sm text-red-600'> envio no disponibles</span>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            )
                        })
                    }
                </figure>         
            </div>
        </section>
    )
}
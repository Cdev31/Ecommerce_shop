import { HeartIcon } from '@heroicons/react/24/outline'
import {} from '@heroicons/react/24/solid'

const reviews = [
    { user: 'andrea.jpeg', review: 'Me encanto el lol,y el producto tambien aparte juego mucho!!'},
    { user: 'bere.jpeg', review: 'Me encanto el producto pero hubiera querido algo mas gay!'},
    { user: 'chamba.jpeg', review: 'Me encanto el producto muy bueno y llega a tiempo!!'},
    { user: 'david.jpeg', review: 'El alcohol y las pcs son algo que van de la mano amigos!!'},
    { user: 'pelon.jpeg', review: 'Me encanto el producto muy bueno y llega a tiempo!!'},
    
]

export const ReviewsCard = ()=>{
    return (
        <section className='flex flex-col gap-5 mt-5'>
            <h2 className='font-bold text-theme text-2xl self-center'>Reviews</h2>
            {
                reviews.map((review)=>{
                    const imageName = `/public/assets/${review.user}`
                    return (
                        <figure className='flex justify-between'>
                            <img src={imageName} className='w-16 h-16 rounded-full' />
                            <caption className='flex flex-col pl-3'>
                                <h3 className='flex font-bold'>Nombre de usuario</h3>
                                <p className='font-medium flex gap-2'>
                                    <span className='max-w-sm'>
                                    {review.review}
                                    </span>
                                    <span className='flex justify-end'>
                                    <HeartIcon className='h-6 text-red-500'/>
                                    </span>
                                </p>
                            </caption>
                        </figure>
                    )
                })
            }
        </section>
    )
}
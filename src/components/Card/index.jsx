export const Card = (props)=>{  

    const colorCategory = (category)=>{
        if(category === 'Shoes'){
            return 'bg-purple-600'
        }
        else if(category === 'Electronic'){
            return 'bg-red-600'
        }
        else if(category === 'Clothes'){
            return 'bg-green-600'
        }
    }

    return (
        <div className='w-52 cursor-pointer rounded-lg flex flex-col gap-1 hover:scale-[1.05] transition-transform duration-500 '>
            <figure className='relative z-10' >
                <span className={`${colorCategory(props.info.category)} pl-1 pr-1 absolute text-white font-medium rounded-lg`}>{props.info.category}</span>
                <img className='rounded-lg h-36 w-full' src={props.info.images_products[0]} />
            </figure>
            <div className={`relative left-2 bottom-11 h-[8rem] rounded-lg pl-1 pr-1 flex flex-col gap-1 justify-between ${colorCategory(props.info.category)}`}>
                <span className='h-12 pt-11'><h2 className="text-white font-ligth">{props.info.title}</h2></span>
                <p className='text-white pb-1 flex gap-[5px]'> 
                    <span className='pb-1 text-sm'>price: </span> 
                    <span className="text-lg font-bold">US${props.info.price}</span>
                </p>
            </div>
        </div>
    )
}
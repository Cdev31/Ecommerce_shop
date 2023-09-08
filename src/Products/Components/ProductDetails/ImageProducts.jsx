import { useState } from "react"


const images = [
    'dell_1.jpg',
    'dell_2.jpg',
    'dell_3.png',
    'pc_3.jpg',
    'dell_3.png',
]


export const ImageProduct = ()=>{
    const [imageName, setImageName] = useState(`/public/assets/${images[0]}`)

    const onChangeImage = (name)=>{
        setImageName(name)
    }

    return (
        <section>
            <div className="flex gap-5 pl-2">
                <figure className="flex flex-col gap-2 justify-center">
                    {
                        images.map((image,i)=>{
                            const imageName = `/public/assets/${image}`
                            return (
                                <img 
                                key={i}
                                src={imageName} alt={image} 
                                className="w-11 h-10 cursor-pointer rounded-lg border-r-[3px] border-b-[3px] border-black/50"
                                onMouseEnter={ ()=> onChangeImage( imageName ) }
                                />
                            )
                        })
                    }
                </figure>
                <figure>
                    <img src={imageName} className="w-80 h-80 cursor-zoom-in" />
                </figure>
            </div>
        </section>
    )
}
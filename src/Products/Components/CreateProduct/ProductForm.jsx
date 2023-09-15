import { useState } from "react"
import { CameraIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { v4 as uuid} from 'uuid'
import { useDispatch, useSelector } from "react-redux"
import { createProduct } from "../../../store/product/thunks"

const categoies = [
    "Cleaning",
    "Electronic",
    "Shoes"
]

export const ProductForm = ()=>{
    const { created } = useSelector( state => state.product )
    const dispatch = useDispatch()
    
    const [image, setImage] = useState([])
    const [product, setProduct] = useState({})
   
    const onChangeImageUrl = (event)=>{
        if( image.length === 4) event.target.disabled = true;
        const images = {
            id: uuid(),
            imageUrl:window.URL.createObjectURL(event.target.files[0])  
        }
        const newImages = [
            ...image,
            images
        ]
        setImage(newImages)
    }

    const onDeleteImage = (id)=>{
        const newImages = image.filter((image)=> image.id !== id );
        setImage(newImages)
    }

    const onInputChange = ({ target }) =>{
        setProduct({
            ...product,
            [target.name]: target.value
        })
    }

    const onCreate = ()=>{
        dispatch( createProduct( product ) )
    }

    const onSubmit = (event) =>{
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-row gap-1">
            <figure className="flex pl-1 flex-row gap-2 flex-wrap max-w-[22rem] ">
                {
                    image.map((image)=>{
                        return (
                           <div key={image.id}>
                             <XMarkIcon
                             onClick={()=>onDeleteImage(image.id)}
                             className="h-6 text-white bg-black/30 cursor-pointer absolute hover:text-red-700 hover:scale-[1.02]"/> 
                             <img 
                             src={image.imageUrl}  className="h-32 w-[10rem] cursor-pointer"/>
                           </div>
                        )
                    })
                }
                <div className="flex justify-center h-32 border-2 border-dashed border-theme w-[10rem] ">
                   <label htmlFor="imageProduct" className="w-full flex justify-center cursor-pointer hover:bg-black/10">
                     <CameraIcon className={`h-10 self-center ${ image.length > 4 ? "text-theme/50": "text-theme "}`}/>
                   </label>
                    <input 
                    onChange={onChangeImageUrl}
                    id="imageProduct" className="hidden" type="file" multiple/>
                </div>
            </figure>

        <section className="flex flex-col gap-5 max-w-md">
            <h2 className="text-2xl font-bold text-theme pr-5">Informacion del Producto</h2>
           <section className="flex flex-row gap-1">
               
                <div className="flex gap-1 basis-1/2">
                    <label className="font-bold text-theme">Price:</label>
                    <input
                    name="price"
                    onBlur={onInputChange}
                    className="focus:outline-none w-10 border-b-2 border-theme" required type="number"/>
                </div>
                <div className="flex gap-1 basis-1/2">
                    <label className="font-bold text-theme">Stock:</label>
                    <input
                    name="stock"
                    onBlur={onInputChange}
                    className="focus:outline-none w-10 border-b-2 border-theme" required type="number"/>
                </div>
           </section>
           <div className="flex gap-1">
                <label className="font-bold text-theme">Description:</label>
                <textarea
                name="description"
                onBlur={onInputChange}
                className="p-1 border-b-2 border-theme focus:outline-none" placeholder="description"/>
            </div>
            <select className="flex focus:outline-none text-theme border-2 border-theme bg-white rounded-xl">
                {
                    categoies.map(
                        (c,i)=> {
                            return (
                                <option key={i}>{c}</option>
                            )
                        }
                    )
                }
            </select>
        </section>
        <button
         onClick={onCreate}
         className="border-2 border-theme rounded-xl p-1 text-theme font-medium max-h-10 self-center cursor-pointer">Add</button>
    </form>
    )
}
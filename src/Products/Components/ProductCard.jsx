import { useNavigate } from "react-router-dom"
import { DirectionIcon } from "../Icons/DirectionIcon"
import { StarListIcon } from "../Icons/StarListIcon"

const imageUrl = '/assets/pc_2.jpg'

export const ProductCard = ({ data })=>{

    const navigate = useNavigate()

    const onChangeInfo = ()=>{
        navigate({
            pathname: `/product/products/${data.id}`
        })
    }
 
    return (
        <div 
        onClick={onChangeInfo}
        className="flex gap-2 flex-row  ml-3 mb-5  rounded-md cursor-pointer hover:scale-[1.02]">
           
           <img className="w-[20rem]" src={`${imageUrl}`} />

           <div
           className=" flex flex-col flex-wrap gap-2"
           >
                <p className="mt-1 ml-1 text-[1.3rem] font-sans"> HP LATITUDE XP-300 7GB RAM , AMD RAIZEN {'(7 NUCLEOS )' } GARANTIA NO INCLUIDA A LA VENTA EN OTRA OCASION </p>
               
                <div className="flex gap-2 flex-col">

                    <span className="ml-2 mb-1 flex gap-2"> 
                        <span className="flex">
                            <p> US$: </p>
                            <p className="text-3xl pt-1 font-medium"> 25 </p> <p className="text-sm"> .99 </p>
                        </span>

                        <p className="font-normal ml-4 mt-2 mb-2 text-sm border-b-2 ">{data.stock} en almacen</p>
                        
                    </span>
                    <span>

                   <span className='flex'>
                    <StarListIcon startNumber={4} />
                    <p className='font-medium text-sm'> 4+ </p>
                   </span>
                    </span>

                    <span className="flex">
                        <DirectionIcon/>
                        <p>Envio a El Salvador</p>
                    </span>
                </div>
           </div>
        </div>
    )
}
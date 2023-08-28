import { useState } from "react"


const images = [
    'camisa_1.jpg',
    'pc_1.jpg',
    'pc_2.jpg'
]


export const HeaderInfoProductCard = ()=>{

    const [ image, setImage ] = useState(images[0])

    const onHoverChangeImage = (image)=>{
        setImage(image)
    }
    
    return (
        <section className="flex flex-row">
            
            <section className="flex flex-row gap-2 ml-2">
                <div className="flex flex-col gap-2 justify-center" >
                {
                    images.map(image => {
                        return(
                            
                               <div>
                                 <img
                                    onMouseEnter={()=>onHoverChangeImage(image)}
                                    className="w-10 h-10 flex-grow rounded-lg cursor-pointer
                                     border-black/[.6] border-r-[2px] border-b-[2px]" 
                                    src={`/assets/${image}`} />
                               </div>
                            
                        )
                    })
                }
                </div>
                <img className=" w-[21rem] h-72 cursor-zoom-in"  src={`/assets/${image}`}/>
            </section>

           <setcion className="w-64">
              <p className="mt-1 ml-1 text-[1.3rem] font-sans"> HP LATITUDE XP-300 7GB RAM , AMD RAIZEN {'(7 NUCLEOS )' } GARANTIA NO INCLUIDA A LA VENTA EN OTRA OCASION </p>
              <article className="flex flex-row gap-2 justify-center">
                <p className="flex flex-col w-[6rem] border-black border-2">
                    <h2 className="text-sm font-bold h-10">Precio sin descuento</h2>
                    <span className="text-xl font-bold">23.45 us$</span>
                </p>
                <p className="flex flex-col w-[6rem] border-black border-2">
                    <h2 className="text-sm font-bold h-10">Precio + iva</h2>
                    <span className="text-xl font-bold">25.45 us$</span>
                </p>
              </article>
              <p>
                <span>En almacen: </span>
                <span>23</span>
              </p>
              <p>
                <span>En almacen: </span>
                <span>23</span>
              </p>
              <p>
                <span>En almacen: </span>
                <span>23</span>
              </p>
              <p>
                <span>En almacen: </span>
                <span>23</span>
              </p>
              <p>
                <span>En almacen: </span>
                <span>23</span>
              </p>
           </setcion>
            

        </section>
    )
}
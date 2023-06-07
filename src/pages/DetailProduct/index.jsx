import {useLocation} from 'react-router-dom'

//import components
import {Layout} from '../../components/Layout'
import { useContext, useState } from 'react'
import { contextProduct } from '../../context'

export const DetailProduct = ()=>{
    const [photo,setPhoto]= useState(0)
    const context = useContext(contextProduct)
    const product = context.findOneProduct(useLocation().pathname.slice(9))

    return (
        <Layout>
            <main className='flex flex-row gap-2 row-start-2 col-start-1 col-end-6 h-full'>          
               <div className='flex gap-5'>
                    <figure className='flex flex-col gap-1 cursor-pointer ml-5 mt-12'>
                        {
                            product[0].images_products.map((e,i)=>{
                                return (
                                    <img
                                    onMouseEnter={()=>setPhoto(i)}
                                     className='h-[50px] w-[55px] border border-black rounded-lg hover:border-blue-500' src={`${e}`}/>
                                   
                                )
                            })
                        }
                   </figure>
                    <img className='w-[22rem] h-72 mt-4 cursor-zoom-in' src={product[0].images_products[photo]}/>
                   
               </div>

                <div className='flex flex-col gap-2'>
                <h1 className='text-[1.8rem] font-bold w-[400px]'>{product[0].title} Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className='flex flex-row gap-5 justify-center'>
                        <span className='flex flex-col border border-black h-12 w-32'>
                            <p className='pl-1 text-sm'>-15% descuento</p>
                            <p className='pl-1 font-medium'>{`${Math.round(product[0].price - 5)}.00 $US`}</p>
                        </span>
                        <span className='border border-black h-12 w-32'>
                            <p className='pl-1 text-sm'>precio total:</p>
                            <p className='pl-1 font-medium'>{product[0].price}0 $US</p>
                        </span>
                    </div>
                    <div>
                        <p className='flex'>
                            <span className='text-lg font-medium'>Category: </span><p className='text-lg font-bold ml-auto mr-12'>{product[0].category}</p>
                        </p>
                        <p className='flex'>
                            <span className='text-lg font-medium'>Brand: </span><p className='text-lg font-bold ml-auto mr-12'>{product[0].brand}</p>
                        </p>
                        <p className='flex'>
                            <span className='text-lg font-medium'>Stock: </span><p className='text-lg font-bold ml-auto mr-12'>{product[0].stock}</p>
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Descripciones del producto:</p>
                        <p className='w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt, quam perferendis
                             omnis aliquid praesentium cupiditate cum sapiente 
                            placeat provident cumque modi? Optio magni ipsum, alias veritatis quos nulla laborum!</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 border border-black/50 h-[325px] w-60 ml-auto mr-12 mt-5 rounded-lg'>
                    <p className='pl-1 text-sm'>$US<span className='text-xl font-bold'>{product[0].price}</span></p>
                    <p className='m-1'>US${product[0].price} de envio y deposito por el producto a detalle de importacion</p>
                    <h2 className='m-1'>Disponible</h2>
                    <div className='flex'>
                        <span className='h-6 w-6 bg-blue-600 pl-1  text-xl text-white'>+</span>
                        <span>0</span>
                        <span className='h-6 w-6 bg-red-600 pl-1  text-xl text-white'>-</span>
                    </div>
                    <button className='rounded-lg bg-orange-600 text-white h-8 w-40 ml-10'>Agregar al carrito</button>
                   <p>Enviado por Amazon</p>
                   <p>Vendido por Amazon</p>
                   <p>Devoluciones con: </p>
                </div>
            </main>
        </Layout>
    )
}
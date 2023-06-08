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
                <div className={`flex flex-col gap-5 border ${context.category.border} h-[450px] w-60 ml-auto mr-12 mt-5 rounded-lg items-center`}>
                    <p className='font-medium flex justify-center mr-3 mt-1' >
                        <span className='text-sm'>$US</span>
                        <span className='text-[1.8rem] font-bold pt-0'>{product[0].price}</span>
                    </p>
                    <p className='ml-1 text-sl font-medium'>US${product[0].price} de envio mas deposito de dereho de importacion</p>
                    <p className='ml-1 mr-1 text-sm font-medium'>Entrega el 14 de julio a las 16:45 p.m</p>
                    <div className='flex flex-col gap-2 mr-auto ml-1'>
                        <span className='text-lg font-medium'>Disponible</span>
                        <select className='ml-1 rounded-lg w-[5rem] font-bold text-sm border-b cursor-pointer border-black/50'>
                        {Array.from({ length: product[0].stock }, (_, index) => (
                                <option className='font-bold' key={index}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                    <button className={`${context.category.categoryColor} font-bold h-8 w-[10rem] rounded-lg text-white hover:scale-[1.02]`}>anadir al carrito</button>
                    <div className='flex flex-col ml-1 font-medium gap-1'>
                        <p className='flex'><span>Vendido por: </span><span className='ml-[3rem] text-sm'>Amazon</span></p>
                        <p className='flex'><span>Entrega: </span><span className='ml-[5rem] text-sm'>Amazon</span></p>
                        <p className='flex'><span>Devoluciones: </span><span className='ml-10 text-sm'>Con oficinas de amazon</span></p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
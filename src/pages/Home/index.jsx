import {useContext} from 'react'

//import components
import {contextProduct} from '../../context'
import {Layout} from '../../components/Layout'
import {Card} from '../../components/Card'

export const Home = ()=>{
    const context = useContext(contextProduct)
    return (
        <Layout>
            <main className='row-start-2 col-start-2 col-end-6 flex flex-row flex-wrap gap-6'>
                <div
                className='flex flex-col items-center'>
                <h2 className='border-[4px] pl-11 border-red-900 rounded-full w-56 font-bold text-[1.5rem] text-red-900 mr-[8rem] mb-5 mt-5 bg-white'>Electronics</h2>
                <div className='flex flex-wrap gap-6'>
                {
                   context.products.map((e)=>{
                    if(e.category === 'Electronic'){
                        return (
                            <Card 
                            key={e.id}
                            info={e}
                            />
                        )
                    }
                   })
                }
                </div>
                </div>
                <div className='flex flex-col items-center'>
                <h2 className='border-[4px] pl-[4rem] border-cyan-900 rounded-full w-56 font-bold text-[1.5rem] text-cyan-900 mr-[8rem] mb-5 mt-5 bg-white'>Shoes</h2>
                <div className='flex flex-wrap gap-6'>
                {
                   context.products.map((e)=>{
                    if(e.category === 'Shoes'){
                        return (
                            <Card 
                            key={e.id}
                            info={e}
                            />
                        )
                    }
                   })
                }
                </div>
                </div>
                <div className='flex flex-col items-center'>
                <h2 className='border-[4px] pl-[4rem] border-green-900 rounded-full w-56 font-bold text-[1.5rem] text-green-900 mr-[8rem] mb-5 mt-5 bg-white'>Clothes</h2>
                <div className='flex flex-wrap gap-6'>
                {
                   context.products.map((e)=>{
                    if(e.category === 'Clothes'){
                        return (
                            <Card 
                            key={e.id}
                            info={e}
                            />
                        )
                    }
                   })
                }
                </div>
                </div>
            </main>
        </Layout>
    )
}
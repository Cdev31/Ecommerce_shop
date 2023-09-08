import { PaginationButton } from '../Components/Products/PaginationButton'
import { ProductCard } from '../Components/Products/ProductCard'
import { ProductFilter } from '../Components/Products/ProductFilter'
import { OfertProductCard } from '../Components/ProductDetails/OfertProductCard'
export const ProductPage = ()=>{
    return (
        <main>
            <section className='flex flex-row'>
                <ProductFilter/>
                <ProductCard/>
            </section>
            <section className='flex justify-center mt-5'>
                <PaginationButton/>
            </section>
            <section className='flex flex-col p-5'>
                <h3 className='text-2xl font-bold text-theme self-center m-3' >Oferts</h3>
                <div className='self-center flex gap-5'>
                    <OfertProductCard/>
                    <OfertProductCard/>
                </div>
            </section>
        </main>
    )
}
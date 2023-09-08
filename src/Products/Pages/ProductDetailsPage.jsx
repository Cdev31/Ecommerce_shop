import { DetailProduct } from "../Components/ProductDetails/DetailProduct"
import { ImageProduct} from "../Components/ProductDetails/ImageProducts"
import { OfertProductCard } from "../Components/ProductDetails/OfertProductCard"
import { OrderDetailInfo } from "../Components/ProductDetails/OrderDetail"
import { ReviewsCard } from "../Components/ProductDetails/ReviewsCard"


export const ProductDetailsPage = ()=>{
    return (
        <main className="flex flex-col gap-5">
            <section className="flex flex-row">
                <ImageProduct/>
                <DetailProduct/>
                <OrderDetailInfo/>
            </section>
            <section className="flex flex-col gap-2">
                <h2 className="font-bold text-xl self-center">Ofertas</h2>
                <OfertProductCard/>
                <OfertProductCard/>
            </section>
            <section className="flex justify-center pb-5">
                <ReviewsCard/>
            </section>
        </main>
    )
}
import { ProductByCategoryForm } from "../Components/CreateProduct/ProductByCategoryForm"
import { ProductForm } from "../Components/CreateProduct/ProductForm"


export const CreateProductPage = ()=>{
    return (
        <main className="flex h-[80vh]">
         <section className="flex self-center gap-5">
         <ProductForm/>
         <ProductByCategoryForm category={"Cleaning"}/>
         </section>
        </main>
    )
}
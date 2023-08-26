import { ProductList } from "../Components/ProductList"
import { FilterProducts } from "../Components/FilterProducts"

export const ProductPage = ()=>{
    return (
        <div className="flex mt-1 w-full">
            <FilterProducts/>
            <ProductList/>
        </div>
    )
}
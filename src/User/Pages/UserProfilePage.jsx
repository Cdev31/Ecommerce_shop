import { Layout } from "../../Common/Layout/Layout"
import { OptionsProduct } from "../Components/OptionsProduct"
import { UserCard } from "../Components/UserCard"

import { OfertProductCard } from '../../Products/Components/ProductDetails/OfertProductCard'

export const UserProfilePage =()=>{
    return(
        <Layout>
            <main className="flex flex-col gap-5 m-2">
                <section className="w-full flex gap-10">
                    <UserCard/>
                    <OptionsProduct/>
                </section>
                <OfertProductCard/>
            </main>
        </Layout>
    )    
}
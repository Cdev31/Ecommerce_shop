import { Layout } from "../../Common/Layout/Layout"
import { UserCard } from "../Components/UserCard"
import { UserOptions } from "../Components/UserOptions"

import { OfertProductCard } from '../../Products/Components/ProductDetails/OfertProductCard'

export const UserProfilePage =()=>{
    return(
        <Layout>
            <main className="flex flex-col">
            <section className="flex m-1 gap-2">
                    <UserOptions/>
                    <UserCard/>
            </section>
            <OfertProductCard/>
            </main>
        </Layout>
    )    
}
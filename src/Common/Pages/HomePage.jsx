import { Carousel } from "../components/Carousel"
import { InfoCards } from "../components/InfoCard"

export const HomePage = ()=>{

    return(
    <main className="flex flex-col w-full">
        <section className="flex flex-col w-full">
            <Carousel/>
            <section className="relative bottom-20 self-center">
              <InfoCards/>
            </section>
        </section>
        <section>
            <p>Clothes</p>
            <img />
        </section>

        <section>
            <p>Clothes</p>
            <img />
        </section>

    </main>
    )
}
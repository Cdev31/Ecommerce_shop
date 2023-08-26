


export const Footer = ()=>{
    const linkStyle = 'text-white text-sm cursor-pointer'

    return (
        <footer 
        className="bg-black/[.9] h-72 flex flex-col"
        >
            <div className="h-full flex justify-center gap-52 mt-4">
                <section className="flex flex-col gap-4">
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle}> servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle}> servicio interno </a>
                    </article>
                </section>

                <section className="flex flex-col gap-4">
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle}> servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                </section>

                <section className="flex flex-col gap-4">
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                </section>

                <section className="flex flex-col gap-4">
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle} > servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle}> servicio interno </a>
                    </article>
                    <article>
                        <h2 className="text-white font-normal">Servicio</h2>
                        <a className={linkStyle}> servicio interno </a>
                    </article>
                </section>
            </div>

            <div className="bg-black/[.85] h-16 flex justify-center flex-col">
                <p className="text-white flex justify-center gap-1"> 
                <span className="text-lg font-bold">©</span>
                <span className="text-sm font-semibold mt-1">Kalet Chavez Cdev31</span>
                </p>
            </div>
        </footer>
    )
}
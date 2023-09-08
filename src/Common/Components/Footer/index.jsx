



export const Footer = ()=>{

    const styleInfoContact = "flex flex-row gap-1 font-bold"
    const styleLinks = "flex flex-col gap-5 text-white cursor-pointer"

    return (
        <footer className="flex flex-col bg-theme h-64">
            <section className="flex flex-row justify-center w-full h-full gap-20 pt-2">
                <article className={styleLinks}>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                </article>
                <article className={styleLinks}> 
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                </article>
                <article className={styleLinks}>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                </article>

                <article className={styleLinks}>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                    <p>Servicios</p>
                </article>

                <article className="flex flex-col gap-1 text-white">
                    <span className={styleInfoContact}>
                        <p>Whats</p>
                        <p>345 234-234</p>
                    </span>
                    <span className={styleInfoContact}>
                        <p>Email</p>
                        <p>345 234-234</p>
                    </span>
                    <span className={styleInfoContact}>
                        <p>Suport</p>
                        <p>345 234-234</p>
                    </span>
                </article>

            </section>
           
            <div className="flex justify-center text-white font-bold">
                <p> © Cdev31</p>
            </div>
        </footer>
    )
}
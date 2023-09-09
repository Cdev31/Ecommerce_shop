import { Link } from "react-router-dom"
import { EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid'


export const UserCard = ()=>{
    return (
        <section className="flex">
            <figure>
              <img className="h-32 w-32 rounded-xl" src="/public/assets/david.jpeg"/>
            </figure>
            <article className="flex flex-col pl-1 gap-1">
                <p className="font-bold text-xl">Juan Juarria Berria</p>
                <p className="flex gap-1 p-1 rounded-xl border-2 border-theme text-theme">
                    <EnvelopeIcon className="h-5 self-center"/>
                    <span className="font-bold">JuanBerrio@gmail.com</span>
                </p>
                <p className="flex ">
                    <span className="p-1 bg-yellow-600 rounded-md text-white" >Bronce</span>
                    <MapIcon className="self-center h-8 text-blue-800"/>
                </p>
                <p className="flex max-w-xs">
                    Descripcion del usuario que debe ir aca por que se debe tener una Descripcion
                    muy buena y poder editarlo
                </p>
            </article>
        </section>
    )
}
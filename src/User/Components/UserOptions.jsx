import { Link } from "react-router-dom"
import { BuildingStorefrontIcon, ChartBarIcon, ChatBubbleLeftEllipsisIcon, ChevronDownIcon, ListBulletIcon, MapPinIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/solid'


export const UserOptions =()=>{
    return (
        <section className="flex flex-col basis-1/6 gap-2  h-96">
           <span className="flex bg-theme text-white">
               <div className="flex flex-row basis-1/2">
                <UserCircleIcon className="h-6 self-center"/>
                <Link className="font-bold text-lg">Perfiles</Link>
               </div>
                <span className="flex flex-col basis-1/2">
                  <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>
            <span className="flex bg-theme text-white">
                <div className="flex flex-row basis-1/2">
                    <ChatBubbleLeftEllipsisIcon className="h-6 self-center"/>
                    <Link className="font-bold text-lg">Mensajes</Link>
                </div>
                <span className="flex flex-col basis-1/2">
                  <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>

            <span className="flex bg-theme text-white">
               <div className="flex flex-row basis-1/2">
                <BuildingStorefrontIcon className="h-6 self-center"/>
                <Link className="font-bold text-lg">Ventas</Link>
               </div>
                <span className="flex flex-col basis-1/2">
                  <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>
           
            <span className="flex bg-theme text-white">
               <div className="flex flex-row basis-1/2">
                <ShoppingCartIcon className="h-6 self-center"/>
                <Link className="font-bold text-lg">Compras</Link>
               </div>
                <span className="flex flex-col basis-1/2">
                  <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>

            <span className="flex bg-theme text-white">
                <div className="flex flex-row basis-1/2">
                   <ListBulletIcon className="h-6 self-center"/>
                   <Link className="font-bold text-lg">Productos</Link>
                </div>
                <span className="flex flex-col basis-1/2">
                <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>
            <span className="flex bg-theme text-white">
                <div className="flex flex-row basis-1/2">
                    <ChartBarIcon className="h-6 self-center"/>
                    <Link className="font-bold text-lg">Estadisticas</Link>
                </div>
                <span className="flex flex-col basis-1/2">
                <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>
            <span className="flex bg-theme text-white">
                <div className="flex flex-row basis-1/2">
                    <MapPinIcon className="h-6 self-center"/>
                    <Link className="font-bold text-lg">Ubicaciones</Link>
                </div>
                <span className="flex flex-col basis-1/2">
                <ChevronDownIcon className="h-5 self-end"/>
                </span>
            </span>
        </section>
    )
}
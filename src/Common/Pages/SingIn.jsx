import { NavLink, Link } from "react-router-dom"
import {ReactComponent as Logo } from '../../icons/logo.svg'




export const SigInPage = ()=>{
    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-2 pt-2">
               <NavLink className="bg-theme h-52 rounded-xl" to="/">
                  <Logo className="cursor-pointer relative bottom-2 h-[14rem] w-full"/>
               </NavLink>
                <form className=" flex flex-col max-w-md gap-2">
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-col">
                        <label className="font-bold text-theme">First Name</label>
                        <input 
                        className="max-w-[8rem] border-b-2 border-theme focus:outline-none  placeholder:text-green-900/60 "
                        type="email" placeholder="Name example"/>
                        
                        </div>
                        <div className="flex flex-col">
                        <label className="font-bold text-theme">Last Name</label>
                        <input 
                        className=" max-w-[8rem] border-b-2 border-theme focus:outline-none  placeholder:text-green-900/60 "
                        type="email" placeholder="Last Name example"/>
                        
                        </div>
                    </div>
                    <label className="font-bold text-theme">Date of Birth</label>
                    <input type="date" className="border-b-2 border-theme cursor-pointer focus:outline-none  placeholder:text-green-900/60"/>
                    <label className="font-bold text-theme">Email</label>
                    <input 
                    className="border-b-2 border-theme focus:outline-none  placeholder:text-green-900/60 "
                    type="email" placeholder="example@gmail.com"/>
                    
                    <label className="font-bold text-theme">Password</label>
                    <input 
                    className="focus:outline-none border-b-2 border-theme placeholder:text-green-900/60"
                    type="password" placeholder="password"/>
                </form>
                <button className="bg-theme text-white rounded-lg font-bold h-10 text-xl">SigIn</button>    
                <button className="bg-blue-500 rounded-lg h-10 text-white"> Google</button>
                <section>
                    <p className="flex flex-col">
                        <Link to="/Login" className="font-bold text-sm underline text-blue-500 cursor-pointer hover:text-yellow-500 pl-1">Iniciar Sesion</Link>
                    </p>
                </section>
            </div>
        </main>
    )
}
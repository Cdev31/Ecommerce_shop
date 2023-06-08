import {UserCircleIcon} from '@heroicons/react/24/solid'

export const LoginForm = ()=>{
    return (
        <form className="w-[400px] h-[400px] rounded-md bg-white flex flex-col gap-2 justify-center border-b-[2px] border-r-[2px] border-black/50">
            <div className='flex flex-row justify-center'>
                <UserCircleIcon className='h-[8rem] w-[8rem] text-cyan-950'/>
            </div>
            <label className="text-lg font-bold ml-5 mr-5 text-cyan-950">Username</label>
            <input className="border-b font-medium text-lg border-cyan-950 text-cyan-950 ml-5 mr-5 focus:outline-none" type="text"/>
            <label className="text-lg font-bold ml-5 mr-5 text-cyan-950">Password</label>
            <input className="border-b font-medium text-lg border-cyan-950 text-cyan-950 ml-5 mr-5 focus:outline-none" type="password"/>
            <div className="flex flex-col gap-2 items-center mt-1">
            <button className="bg-cyan-950 text-lg font-bold rounded-lg text-white h-10 w-[22rem] hover:scale-[1.02]">Iniciar sesion</button>
            <button className="bg-cyan-950 text-lg font-bold rounded-lg text-white h-10 w-[22rem] hover:scale-[1.02]">Registrarse</button>
            </div>
        </form>
    )
}